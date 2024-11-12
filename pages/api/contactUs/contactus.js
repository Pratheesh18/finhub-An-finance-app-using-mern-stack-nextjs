import clientPromise from "../../../lib/mongodb";
import ContactUs from "../../../models/ContactUs";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phone } = req.body;
    // console.log(name, " ", email, " ", phone);
    if (!/^\d{10}$/.test(phone)) {
      return res
        .status(400)
        .json({ message: "Phone number must be 10 digits" });
    }

    if (!name || !email || !phone) {
      return res.status(400).json({ message: "All fields are required" });
    }

    try {
      const client = await clientPromise;
      const db = client.db();

      // Check if a contact with the same email or phone number already exists
      const existingContact = await db.collection("contacts").findOne({
        $or: [{ email }, { phone }],
      });

      if (existingContact) {
        return res
          .status(400)
          .json({ message: "Email or phone number already exists!" });
      }

      const newContact = new ContactUs({ name, email, phone });
      // console.log(newContact);

       await db.collection("contacts").insertOne(newContact);

      return res
        .status(201)
        .json({ message: "Contact information submitted successfully" });
    } catch (error) {
      console.error("Contact submission error:", error);

      if (error.name === "ValidationError") {
        const errorMessage = Object.values(error.errors)
          .map((err) => err.message)
          .join(", ");

        return res.status(400).json({ message: errorMessage });
      }
      return res
        .status(500)
        .json({ message: "Error: Contact submission failed" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
