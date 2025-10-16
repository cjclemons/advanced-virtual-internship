import Image from "next/image"
function PlanHeader() {
  return (
    <>
      <div className="plan__header--wrapper">
        <div className="plan__header">
          <div className="plan__title">
            Get unlimited access to many amazing books to read
          </div>
          <div className="plan__sub--title">
            Turn ordinary moments into amazing learning opportunities
          </div>
          <figure className="plan__img--mask">
            <Image
              alt="pricing"
              src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpricing-top.4d86e93a.png&amp;w=1920&amp;q=75"
              width={860}
              height={722}
              decoding="async"
              data-nimg="1"
              loading="lazy"
              style={{color: 'transparent'}}
              
            />
          </figure>
        </div>
      </div>
    </>
  );
}

export default PlanHeader;
