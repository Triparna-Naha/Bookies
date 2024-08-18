import React from "react";
import { Link } from "react-router-dom";
function Job() {
  return (
    <>
      <div className="p-20 text-center bg-slate-200 ">
        <div className="card lg:card-side bg-base-100 shadow-xl mt-32">
          <figure>
            <img
              src="https://imgs.search.brave.com/CdfMd3LbG7mBV5zWAF0DOE8K8RXJFNpT3E63CxbHui0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZHV1cGRhdGVzLmlu/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE3/LzEwL01OQy1pbi1J/bmRpYS02OTZ4NDQ1/LmpwZw"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New Job openings are available NOW!</h2>
            <p>Click the button to apply for jobs.</p>
            <div className="card-actions justify-end">
              <Link to="https://forms.office.com/r/KuXidGYMHk">
                <button className="btn btn-primary">APPLY</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card card-side bg-base-100 shadow-xl mt-32">
          <figure>
            <img
              src="https://media.istockphoto.com/id/2158703079/photo/closeup-of-tech-team-professionals-collaborate-discuss-software-development-strategies-late.webp?b=1&s=170667a&w=0&k=20&c=R-YBR7Ub1yHVEKITHMVvQLYgFT04ddntT8tEqww9_MM="
              alt="Movie"
            />
          </figure> 
          <div className="card-body">
            <h2 className="card-title">Frontend Developer Required!</h2>
            <p>Click the button to Apply for this opening.</p>
            <div className="card-actions justify-end">
              <Link to="https://forms.office.com/r/KuXidGYMHk">
                <button className="btn btn-primary">Apply</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Job;
