import {Email} from "../Models/Email.js"


export const Emailr = async( req, res) =>{
    const {email}  = req.body;
    try {

        const Checkuser = await Email.findOne({email});

        if(Checkuser){
            return res.status(400).json({maggi:"user already hai -- backend"}); 
        }

        const newEmail = new Email({ email }); // ✅ Create new document
        await newEmail.save();                 // ✅ Save it to MongoDB

        

        return res.status(201).json({ message: "Email saved successfully -- server" });

        
    } catch (error) {
         return res.status(500).json({ message: "Server error" });
    }
}


export const getRecentEmails = async (req, res) => {
  try {
    const emails = await Email.find()
      .sort({ createdAt: -1 }) // newest first
      .limit(5);              // only 10 results
    res.status(200).json(emails);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};