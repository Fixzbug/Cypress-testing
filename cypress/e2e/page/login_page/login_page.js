// นำเข้าโมดูลหรือฟังก์ชันที่เกี่ยวข้อง
import { keyword } from "../../keyword/keyword";

// สร้าง object `page` ซึ่งรวบรวมฟังก์ชันทั้งหมด
const login_page = {

    /**
     * ฟังก์ชันสำหรับใส่ชื่อผู้ใช้งาน (username)
     * @param {string} locator - ตัวระบุของ input สำหรับ username
     * @param {string} username - ค่าของชื่อผู้ใช้งานที่ต้องการกรอก
     */
    input_username(locator, username) {
        keyword.input_text(locator, username);
    },

    /**
     * ฟังก์ชันสำหรับใส่รหัสผ่าน (password)
     * @param {string} locator - ตัวระบุของ input สำหรับ password
     * @param {string} password - ค่ารหัสผ่านที่ต้องการกรอก
     */
    input_password(locator, password) {
        keyword.input_text(locator, password);
    },

    /**
     * ฟังก์ชันสำหรับตรวจสอบค่าที่ควรจะมีใน input
     * @param {string} locator - ตัวระบุของ input
     * @param {string} value - ค่าที่ต้องการตรวจสอบ
     */
    get_should(locator, value) {
        keyword.should_have_value(locator, value);
    },

    /**
     * ฟังก์ชันสำหรับรอเวลาที่กำหนด
     * @param {number} timeout - เวลาในหน่วยมิลลิวินาทีที่ต้องการรอ
     */
    wait_page(timeout) {
        keyword.wait(timeout);
    },

    /**
     * ฟังก์ชันสำหรับคลิกองค์ประกอบ (element)
     * @param {string} locator - ตัวระบุขององค์ประกอบที่ต้องการคลิก
     */
    click_element(locator) {
        keyword.click_element(locator);
    },

    /**
     * ฟังก์ชันสำหรับตรวจสอบว่าองค์ประกอบมีข้อความที่กำหนด (text)
     * @param {string} text - ข้อความที่ต้องการตรวจสอบในองค์ประกอบ
     */
    contains_text(locator,text) {
        keyword.contains_text(locator,text);
    }
};

// Export `page` object เพื่อให้สามารถใช้งานในไฟล์อื่นได้
export { login_page };

// ลดความซับซ้อนของโค้ด: โครงสร้างแบบนี้เหมาะสำหรับการจัดการโค้ดที่มีฟังก์ชันหลายตัวที่เกี่ยวข้องกัน
// ง่ายต่อการบำรุงรักษา: หากต้องการเพิ่มฟังก์ชันใหม่ ก็สามารถเพิ่มเข้าไปใน page object ได้โดยตรง
// ใช้งานซ้ำได้ง่าย: เพียงแค่ import { page } คุณก็สามารถเรียกใช้ฟังก์ชันทั้งหมดใน page object ได้ทันที