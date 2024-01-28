import { react } from 'react';
import { Navbar, Footer } from '../../component';
import styled from 'styled-components';

const AboutUs = () => {
  return (
    <Wrapper>
      <Navbar />
      <div className='outerContainer'>
        <h1 className='heading'>About Us</h1>
        <div className='container'>
          <div className='introduction'>
            <h3 className='subHeading'>Introduction</h3>
            <p>
              Careerwala.com is a professionally managed business entity
              offering a bouquet of comprehensive integrated solutions to the
              entire spectrum the of human resource training & development and
              placement services. The company draws its innate strength from a
              highly motivated and vastly experienced talent pool that ensures
              the highest standards of security services to ensure a benchmark
              in the industry and a quality of ‘better than the best’.
            </p>
            <p>
              We synergized to an entire array of the Manpower Solution needs of
              the client to include: talent spotting and initial screening,
              headhunting, provision of industry client specific pre-placement
              training.{' '}
            </p>
          </div>
          <div className='principle'>
            <h3 className='subHeading'>Our Guiding Principle</h3>
            <p>
              We work on the Principle of “Quality and Service” which has
              resulted in complete client satisfaction.
            </p>
          </div>
          <div className='need'>
            <h3 className='subHeading'>
              Why need a placement / HR Service Provider??{' '}
            </h3>
            <p>
              India is poised to emerge as a potent and a viable manpower
              resource centre in the world. The nation has already showcased
              itself as a key player with distinction, as a key player in the
              service industry and has proved its capability in handling the
              backend process of global players and multi-national tie ups.
              However, this important development has also generated a challenge
              of any placement / HR service provider to be able to do a talent
              spotting and have a right resource match for the right manpower
              opening, so that the candidate thus picked up for any vacancy is a
              perfect fit in all aspects.
            </p>
            <p>
              Thus, Corporate India and its key resource, fit” manpower
              resource, as per the industry / client recruitment, by carrying
              out a holistic risk assessment of this vital resource input to the
              industry.
            </p>
          </div>
          <div className='whyus'>
            <h3 className='subHeading'>Why Us??</h3>
            <p>
              We view ourselves as channel partners in serving for the ever
              evolving services needs of our client and believe that a
              productive partnership approach to manpower services helps our
              clients to remain focused on their key business areas, hence
              maximizing their productivity. We always strive to understand our
              client’s needs and judiciously integrate it in the scope of
              services, in line with our philosophy of continuous introspection
              and up-gradation of our skill sets. We build long term
              relationships which are mutually beneficial. We also pride
              ourselves by being an entrepreneurial team adding value to every
              relationship.The salient aspects that differentiate the company
              from the others in this field are:
            </p>
            <ul>
              <li>Professional approach and quick grasp of client’s needs.</li>
              <li>Focused leadership and highly competent talent pool.</li>
              <li>Straight talk and swift action.</li>
              <li>
                Strict quality control – Superior yet affordable true value
                services.
              </li>
              <li>
                Single widow source offering comprehensive integrated solutions.
              </li>
              <li>
                Organic resources to conduct pre-employment checks /
                verification.
              </li>
              <li>Integrity in selection process and information.</li>
            </ul>
          </div>
          <div className='coreValues'>
            <h3 className='subHeading'>Core Values</h3>
            <p>
              Our key assets to retain our customers trust and satisfaction, we
              strongly adhere to our core principle values to include –
              Accountability, Integrity, Reliability, Confidentiality,
              Transparency and Consistency.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .outerContainer {
    padding: 0 11.2rem;
    font-family: 'Poppins', sans-serif;
  }
  .heading {
    text-align: center;
    line-height: 1.05;
    font-weight: 400;
    font-size: 2.2rem;
    letter-spacing: 1px;
  }
  .container {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .subHeading {
    font-size: 1.7rem;
    font-weight: 400;
    letter-spacing: 0.5px;
    margin-bottom: 0px;
    margin-top: 10px;
  }
`;

export default AboutUs;
