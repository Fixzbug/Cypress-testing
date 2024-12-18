const keyword = {

    // พิมพ์ข้อความลงใน element
    input_text: (locator, text) => cy.get(locator).type(text),

    // คลิกที่ element
    click_element: (locator) => cy.get(locator).click(),

    // พิมพ์ข้อความลงใน element
    type_text: (locator, text) => cy.get(locator).type(text),

    // ตรวจสอบว่า element มีค่า
    should_have_value: (locator, value) => cy.get(locator).should('have.value', value),

    // ตรวจสอบว่า element มีข้อความ
    should_contain_text: (locator, text) => cy.get(locator).should('contain.text', text),

    // ตรวจสอบว่า element เป็น visible
    should_be_visible: (locator) => cy.get(locator).should('be.visible'),

    // ตรวจสอบว่า element ไม่เป็น visible
    should_not_be_visible: (locator) => cy.get(locator).should('not.be.visible'),

    // ตรวจสอบ attribute ของ element
    should_have_attribute: (locator, attr, value) => cy.get(locator).should('have.attr', attr, value),

    // เลือก element ตาม index (eq)
    get_element_by_index: (locator, index) => cy.get(locator).eq(index),

    // เลือก element ตัวแรก (first)
    get_first_element: (locator) => cy.get(locator).first(),

    // เลือก element ตัวสุดท้าย (last)
    get_last_element: (locator) => cy.get(locator).last(),

    // ใช้ find() เพื่อค้นหา element ภายใต้ parent
    find_element: (parentLocator, childLocator) => cy.get(parentLocator).find(childLocator),

    // กรอง element ตามเงื่อนไข (filter)
    filter_element: (locator, condition) => cy.get(locator).filter(condition),

    // ตรวจสอบข้อความที่มีใน element (contains)
    contains_text: (locator, text) => cy.contains(locator, text),

    // ใช้ within() เพื่อทำงานในขอบเขตของ element
    within_element: (parentLocator, callback) => cy.get(parentLocator).within(callback),

    // Hover (mouseover) ไปที่ element
    hover_element: (locator) => cy.get(locator).trigger('mouseover'),

    // Scroll ไปยัง element
    scroll_to_element: (locator) => cy.get(locator).scrollIntoView(),

    // ตรวจสอบว่ามีจำนวน element เท่ากับที่กำหนด
    should_have_length: (locator, length) => cy.get(locator).should('have.length', length),

    // ตรวจสอบว่า element ถูก checked
    should_be_checked: (locator) => cy.get(locator).should('be.checked'),

    // ตรวจสอบว่า element ไม่ถูก checked
    should_not_be_checked: (locator) => cy.get(locator).should('not.be.checked'),

    // รอเวลาที่กำหนด
    wait: (time) => cy.wait(time),
};

export { keyword };
