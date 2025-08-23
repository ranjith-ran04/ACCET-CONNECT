const db = require('../../config/dbconnect');

async function alumnireg(req, res) {
  const data = req.body;

  if (!data || Object.keys(data).length === 0) {
    return res.status(400).json({success: false, message: "No data provided"});
  }

  const columns = Object.keys(data).join(', ');
  const placeholders = Object.keys(data).map(() => '?').join(', ');
  const values = Object.values(data);

  try {
    const query = `insert into alumni_profiles (${columns}) VALUES (${placeholders})`;
    const [result] = await db.query(query, values);

    res.status(200).json({success: true,message: "Alumni profile saved",affectedRows: result.affectedRows});

  } catch (error) {
    console.error(error);
    return res.status(500).json({success: false, message: "Database insertion error", error});
  }
}

module.exports = alumnireg;
