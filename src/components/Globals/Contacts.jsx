import React from 'react'


function Contacts() {

    return (
        <div className="contact--container">

            <div className="contact--left">
                <div className="contact--main">
                    <h2 className={'h2'}>Contact Us</h2>
                    <p className={'p'}>If you have any questions or would like to find out more, please contact us. Our staff is very knowledgeable in these areas and will work with you to find the best solution for your loved one's needs.</p>
                </div>

                <div className="contact--info">
                    <div className="info--talk">
                        <h3>Talk With Us</h3>
                        <p>972-222-9263</p>
                    </div>
                    <div className="info--mail">
                        <h3>Mail Us</h3>
                        <p>support@texasstarhmes.com</p>
                    </div>
                    <div className="info--location">
                        <h3>Location</h3>
                        <p>No: 58 A, East Madison Street, Baltimore, MD, USA 4508</p>
                    </div>
                </div>
            </div>

            <div className="contact--right">
                <form>
                    <label><input type="text" name="name" placeholder='Name'/></label>
                    <label><input type="text" name="Email" placeholder='Email' /></label>
                    <label><input type="text" name="Company Name" placeholder='Company Name'/></label>
                    <label><input type="number" name="Phone Number" placeholder='Phone Number' /></label>
                    <label><input type="text" name="Address" placeholder='Address' /></label>
                    <label><input type="text" name="Comments" placeholder='Comments' /></label>
                    <input className={"btn"} type="submit" value="Submit" />
                </form>
            </div>

        </div>
    )
}

export default Contacts