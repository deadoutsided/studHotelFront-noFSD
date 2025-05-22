beforeEach(() => {
  cy.visit("/");
});

const formData = ['Тип размещения: стандартное', 'Количество комнат: 3', 'Дата: 2025-05-23', 'Комментарий: Комментарий', 'Приглашённое лицо: Аркадий2', 'Цель приезда: Пожить', 'Автор заявки: Аркадий', 'Номер телефона: 8 800 555 3535', 'Email: aboba@maul.ru', 'Согласие на обработку персональных данных: есть']

describe('e2e booking request', () => {
  it('test adding booking request', () => {
    cy.viewport(1920, 900)
    cy.get('a[class*="link"]').first().click()
    cy.get('a[class*="linkColor"]').click()
    cy.location('pathname').should('eq', '/booking-request')
    cy.get('input[name=roomType]').type('стандартное')
    cy.get('input[name=rooms]').type('3')
    cy.get('input[name=dates]').type('2025-05-23')
    cy.get('input[name=comment]').type('Комментарий')
    cy.get('input[name=invitedPerson]').type('Аркадий2')
    cy.get('input[name=vistitPurpose]').type('Пожить')
    cy.get('input[name=requestAuthor]').type('Аркадий')
    cy.get('input[name=phoneNumber]').type('8 800 555 3535')
    cy.get('input[name=email]').type('aboba@maul.ru')
    cy.get('input[name=personalDataAgree]').check()
    cy.get('button[type=submit]').click()
    cy.visit("/admin/requests");
    cy.get('div[class*="bookingRequestCardWrapper"]').last().find('p[class*="par"]').each(($el, index) => {
      cy.wrap($el).should('have.text', formData[index])
    })
    cy.get('div[class*="bookingRequestCardWrapper"]').last().find('div[class*="statusCircle"]').should('have.css', 'background-color', 'rgb(255, 0, 0)')
    cy.get('div[class*="bookingRequestCardWrapper"]').last().find('button[type=button]').click()
    cy.get('div[class*="bookingRequestCardWrapper"]').last().find('div[class*="statusCircle"]').should('have.css', 'background-color', 'rgb(0, 128, 0)')
  })
})