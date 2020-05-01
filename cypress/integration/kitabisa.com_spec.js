describe('KitaBisa.com Automation web Test', () => {
    it('Visit KitaBisa.com home page', () => {
        cy.visit('https://kitabisa.com/')
        cy.get('main[id="home-page"]')
    })

    it('Select any campaign > Click "Donasi Sekarang"', () => {
        cy.xpath('//*[@id="177298-177298"]/div[1]')
            .click({
                multiple: true,
                force: true
            })
        cy.get('button[id="campaign-detail_button_donasi-sekarang"]')
            .click()
    })

    it('Select amount as 10K > Select payment method as Transfer BCA > Enter any name and email id in the corresponding fields', () => {
        cy.xpath('//*[@id="donation-amount"]/div[1]')
            .click({
                multiple: true,
                force: true
            })
        cy.xpath('//*[@id="__next"]/main/div[6]/div[5]')
            .click({
                multiple: true,
                force: true
            })
        cy.get('input[name="fullname"]')
            .type('Mahfudh Naufal')
        cy.get('input[name="username"]')
            .type('kitabisa@com.test')
    })

    it('Click Lanjutkan Pembayaran', () => {
        cy.get('button[id="contribute_button_lanjutkan-pembayaran"]')
            .click()
    })

    //i see the banner whit different heading (Hitung zakat dengan kalkulator) so i still implement this step
    it('Close the half banner with heading "Hitung zakat dengan kalkulator"', () => {
        cy.get('div[class="style__BannerContainer-sc-106sadj-0 iztSIq"]')
            .click({
                multiple: true,
                force: true
            })
    })

    it('Click "Kembali ke Penggalangan"', () => {
        cy.get('img[class="style__ArrowImg-sc-1qhccvk-3 hTwjl"]')
            .click({
                multiple: true,
                force: true
            })
    })

    it('Click back arrow on the campaign', () => {
        cy.get('svg[data-icon="arrow-left"]')
            .click({
                multiple: true,
                force: true
            })
    })
})