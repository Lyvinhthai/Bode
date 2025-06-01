-- Tạo cơ sở dữ liệu nếu chưa có
CREATE DATABASE IF NOT EXISTS bode_db
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

-- Sử dụng cơ sở dữ liệu vừa tạo
USE bode_db;

-- Tạo bảng lưu thông tin cơ sở thờ tự
CREATE TABLE IF NOT EXISTS co_so_tho_tu (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ten_co_so VARCHAR(255) NOT NULL,
    loai ENUM('chùa', 'đình', 'miếu', 'tự') NOT NULL,
    dia_chi VARCHAR(255),
    nam_xay_dung INT,
    tru_tri VARCHAR(255),
    mo_ta TEXT,
    hinh_anh TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
