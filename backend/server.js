// GET: Lấy tất cả
app.get("/api/co-so", (req, res) => {
  db.query("SELECT * FROM co_so_tho_tu", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

// GET: Lấy theo loại (ví dụ: chùa, đình,...)
app.get("/api/co-so/:loai", (req, res) => {
  const { loai } = req.params;
  const sql = "SELECT * FROM co_so_tho_tu WHERE loai = ?";
  db.query(sql, [loai], (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

// POST: Thêm cơ sở mới
app.post("/api/co-so", (req, res) => {
  const { ten_co_so, loai, dia_chi, nam_xay_dung, tru_tri, mo_ta, hinh_anh } =
    req.body;
  const sql = `INSERT INTO co_so_tho_tu (ten_co_so, loai, dia_chi, nam_xay_dung, tru_tri, mo_ta, hinh_anh)
               VALUES (?, ?, ?, ?, ?, ?, ?)`;
  db.query(
    sql,
    [ten_co_so, loai, dia_chi, nam_xay_dung, tru_tri, mo_ta, hinh_anh],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ id: result.insertId, ...req.body });
    }
  );
});
