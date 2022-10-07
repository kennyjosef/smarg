import React from 'react'
import './Testimonial.css'
import Hero from '../../Components/Hero/Hero'
import BlueCard from '../../Components/BlueCard/BlueCard'

const Testimonial = () => {
 
  return (
    <div>
      <div>
        <Hero
        first='effective from november 24'
        second="Privacy Policy"
        />
      </div>
      <div className='policy'>
        <div>
          <h4>1. Introduction</h4>
          <p>A one-time customer-to-vendor payment is commonly used when you shop online at an e-commmerce site, such as Amazon. You click on the shopping cart icon, type in your credit card information and click on the checkout button. The site processes your credit card information and sends you an e-mail notifiying you that your payment was received. On some Web sites, you can use an e-check instead of a credit card. To pay by e-check, you type in your account number and your bank's routing number. The vendor authorizes payment through the customer's bank, which then either initiates an electronic funds transfer (EFT) or prints a check and mails it to the vendor.
You make a recurring customer-to-vendor payment when you pay a bill through a regularly scheduled direct debit from your checking account or an automatic charge to your credit card. </p>
        </div>
        <div>
          <h4>2. Collection Of Information</h4>
          <p>A one-time customer-to-vendor payment is commonly used when you shop online at an e-commmerce site, such as Amazon. You click on the shopping cart icon, type in your credit card information and click on the checkout button. The site processes your credit card information and sends you an e-mail notifiying you that your payment was received. On some Web sites, you can use an e-check instead of a credit card. To pay by e-check, you type in your account number and your bank's routing number. The vendor authorizes payment through the customer's bank, which then either initiates an electronic funds transfer (EFT) or prints a check and mails it to the vendor.
You make a recurring customer-to-vendor payment when you pay a bill through a regularly scheduled direct debit from your checking account or an automatic charge to your credit card. </p>
        </div>
        <div>
          <h4>3. Use of Information</h4>
          <p>A one-time customer-to-vendor payment is commonly used when you shop online at an e-commmerce site, such as Amazon. You click on the shopping cart icon, type in your credit card information and click on the checkout button. The site processes your credit card information and sends you an e-mail notifiying you that your payment was received. On some Web sites, you can use an e-check instead of a credit card. To pay by e-check, you type in your account number and your bank's routing number. The vendor authorizes payment through the customer's bank, which then either initiates an electronic funds transfer (EFT) or prints a check and mails it to the vendor.
You make a recurring customer-to-vendor payment when you pay a bill through a regularly scheduled direct debit from your checking account or an automatic charge to your credit card. </p>
        </div>
      </div>
      <div className='forBlue'>
      <BlueCard/>
      </div>
    </div>
  )
}

export default Testimonial