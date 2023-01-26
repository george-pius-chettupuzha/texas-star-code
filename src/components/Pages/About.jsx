
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";
import Resourcescard from "../Globals/Resourcescard";
import Hero from "../Globals/Hero";
import Contact from "../Globals/Contacts";


const AboutUs = () => {
  return (
    <div className="about--container">

      <section className='hero--container about--banner'>
        <Hero
          Image={require('../../assets/hero--about.jpg')}
          Head={"Making a difference in people's lives - The story of Texas Star"}
          Paragraph={"Texas Star is a medical equipment and supply provider that offers solutions and services for hospice care. We provide end-stage care to patients with compassion and diligence. It stands out from the competition by putting a lot of emphasis on customer service that can't be beaten. We are based in Dallas-Fort Worth, Texas, and have been working to improve the lives of patients since 2000."}
          CtaName={"Contact Our Representative"}
        />
      </section>

      <section className="intro--container">

        <div className="left--content">

          <h2 className="h2">About Texas Star DME</h2>
          <p className="p">Texas Star was started in Dallas in 2000 to meet the specific need of providing medical equipment and supplies to the growing number of hospice patients. {<br />} {<br />}

            We've been helping the people of Texas for more than 20 years, and we've grown from a small local business to one of the most trusted providers of DME hospice services to patients and hospice caregivers in North Texas. {<br />} {<br />}

            With an ever-changing technology landscape, Texas Star came up with innovative technological solutions that were needed to make it easier for hospice caregivers to order equipment for their patients. Texas Star laid the foundation for the company that it is today due to its focus on DME hospice care alone! {<br />} {<br />}

            We provide hospice centers and caregivers with the best DME experience available. We give our accomplices unsurprising expenses, thereby being transparent and functionally simple. Most importantly, we provide them with the tranquility they require. {<br />} {<br />}

            This is what we do by giving our clients access to a powerful web-based program. Together with expert advice from our consulting teams, these tools help our clients become more clear and efficient in their fields.
          </p>
        </div>

        <div className="right--content">

          <div className="content">
            <h3 className="h3">Our Mission</h3>
            <p className="p">Our mission is to offer our customers the best service and value available in the market today. It's all about how we care for people. We are a company that has been around since 2000 and has always been there for the community's medical needs.
            </p>
          </div>

          <div className="content">
            <h3 className="h3">Our Vision</h3>
            <p className="p">Texas Star is focused on one thing: giving our customers the very best care products and services. Quality and integrity are central to Texas Star's core values. We believe honesty, reliability, and transparency are the foundations of a satisfied customer. We want to be your go-to management company for medical supplies and equipment. We want to equip ourselves with a wide range of products that will help patients and customers meet their needs from A to Z.
            </p>
          </div>

          <div className="content">
            <h3 className="h3">Our Values</h3>
            <p className="p">Our company values include leadership, passion, honesty, integrity, responsibility, respect for all people, and a commitment to excellence. Our products are based on the following values: quality, sustainability, innovation, and reliability.
            </p>
          </div>

        </div>
      </section>

      <section className="counter--container">
        <div className="itemlist">

          <div className="counter--item">
            <h2>900+</h2>
            <p>Network Providers</p>
          </div>

          <div className="counter--item">
            <h2>1800+</h2>
            <p>Our Locations</p>
          </div>

          <div className="counter--item">
            <h2>1m+</h2>
            <p>Patients Served</p>
          </div>

          <div className="counter--item">
            <h2>37+</h2>
            <p>Served States</p>
          </div>

        </div>
      </section>

      <section className="team--container">
        <div className="head--content">
          <h2 className="h2">Our Team & Our Family</h2>
          <p className="p">Our team is made up of talented professionals with a passion for helping others succeed. We are committed to providing the highest quality of service to our customers and strive to create a positive, supportive environment for our team members.</p>
        </div>

        <div className="cards">
          <div className="card">
            <img src={require('../../assets/profile 01.jpg')} alt="profile" />
            <div className="card--content">
              <h3 className="h3">John Doe</h3>
              <p className="p">Lorem Ipsum is simply.</p>
              <div className="sm--links">
                <a href="https://www.google.com/" target="_blank"><FaFacebookSquare /></a>
                <a href="https://www.google.com/" target="_blank"><FaInstagram /></a>
                <a href="https://www.google.com/" target="_blank"><FaTwitter /></a>
              </div>
            </div>
          </div>
          <div className="card">
          <img src={require('../../assets/profile 02.jpg')} alt="profile" />
            <div className="card--content">
              <h3 className="h3">Mary Jackson</h3>
              <p className="p">Lorem Ipsum is simply.</p>
              <div className="sm--links">
                <a href="https://www.google.com/" target="_blank"><FaFacebookSquare /></a>
                <a href="https://www.google.com/" target="_blank"><FaInstagram /></a>
                <a href="https://www.google.com/" target="_blank"><FaTwitter /></a>
              </div>
            </div>
          </div>
          <div className="card">
          <img src={require('../../assets/profile 03.jpg')} alt="profile" />
            <div className="card--content">
              <h3 className="h3">Andrea Piacquadio</h3>
              <p className="p">Lorem Ipsum is simply.</p>
              <div className="sm--links">
                <a href="https://www.google.com/" target="_blank"><FaFacebookSquare /></a>
                <a href="https://www.google.com/" target="_blank"><FaInstagram /></a>
                <a href="https://www.google.com/" target="_blank"><FaTwitter /></a>
              </div>
            </div>
          </div>
          <div className="card">
          <img src={require('../../assets/profile 04.jpg')} alt="profile" />
            <div className="card--content">
              <h3 className="h3">Eva Joe</h3>
              <p className="p">Lorem Ipsum is simply.</p>
              <div className="sm--links">
                <a href="https://www.google.com/" target="_blank"><FaFacebookSquare /></a>
                <a href="https://www.google.com/" target="_blank"><FaInstagram /></a>
                <a href="https://www.google.com/" target="_blank"><FaTwitter /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="resource--container">
        <div className="resource">
          <h2 className="h2">Resources</h2>
          <div className="cards">
          <Resourcescard Heading={"Hospice Foundation of America"} />
          <Resourcescard Heading={"National Hospice and Palliative Care Organization"} />
          <Resourcescard Heading={"American Academy of Hospice and Palliative Medicine"} />
          <Resourcescard Heading={"Texas Association for Home Care and Hospice"} />
          </div>

          <div className="caregiver">
            <h2 className="h2">Caregiver Resources</h2>
          <div className="cards">
          <Resourcescard className={'card'} Heading={"National Hospice and Palliative Care Organization"} />
          <Resourcescard className={'card'} Heading={"National Family Caregivers Association"} />
          <Resourcescard className={'card'} Heading={"National Alliance for Caregiving"} />
          <Resourcescard className={'card'} Heading={"Children of Aging Parents"} />
          <Resourcescard className={'card'} Heading={"Well Spouse Foundation"} />
          <Resourcescard className={'card'} Heading={"American Cancer Society"} />
          <Resourcescard className={'card'} Heading={"Alzheimers Association"} />
          <Resourcescard className={'card'} Heading={"Amyotrophic Lateral Sclerosis Association"} />
          <Resourcescard className={'card'} Heading={"American Red Cross: Family Caregiving Program"} />
          <Resourcescard className={'card'} Heading={"American Parkinson Disease Association, Inc."} />
          <Resourcescard className={'card'} Heading={"National Parkinson Foundation"} />
          <Resourcescard className={'card'} Heading={"Medic Alert Foundation"} />
          <Resourcescard className={'card'} Heading={"National Association of Professional Geriatric Care Managers"} />
          </div>
          </div>
        </div>
       
      </section>

      <Contact />
    </div>
  )
}

export default AboutUs