import React, { useState, useEffect } from "react";
import NavigationBar from "../Components/NavigationBar";

import DATA from "../data/Data";
import Header from "../Components/Header";
function Movies() {


  const [isMovies, SetMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    SetMovies(DATA.Recomend);
  }, []);

  const [active, setActive] = useState([]);

  const ActiveClick = (id) => {
    if (active.includes(id)) {
      setActive(active.filter((activeId) => activeId !== id));
    } else {
      setActive([...active, id]);
    }
  };
  return (
    <div className="w-full p-[0px] flex gap-[36px] md:p-[32px] sm:p-[24px]">
      <NavigationBar />
      <div className="w-full">
        <Header/>
        <div className="w-full p-[24px] sm:p-[0px]">
          <form>
            <label htmlFor="search" className="flex  gap-[10px] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <rect opacity="0.01" width="32" height="32" fill="black" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.08 21.2L27.6133 25.72C27.8657 25.9704 28.0077 26.3111 28.0077 26.6667C28.0077 27.0222 27.8657 27.363 27.6133 27.6133C27.363 27.8657 27.0222 28.0077 26.6667 28.0077C26.3111 28.0077 25.9704 27.8657 25.72 27.6133L21.2 23.08C19.3366 24.5426 17.0355 25.3363 14.6667 25.3333C8.77563 25.3333 4 20.5577 4 14.6667C4 8.77563 8.77563 4 14.6667 4C20.5577 4 25.3333 8.77563 25.3333 14.6667C25.3363 17.0355 24.5426 19.3366 23.08 21.2ZM14.6667 6.66667C10.2484 6.66667 6.66667 10.2484 6.66667 14.6667C6.66667 19.0849 10.2484 22.6667 14.6667 22.6667C19.0849 22.6667 22.6667 19.0849 22.6667 14.6667C22.6667 10.2484 19.0849 6.66667 14.6667 6.66667Z"
                  fill="white"
                />
              </svg>
              <input
                placeholder="Search for movies"
                className="border-b-[1px] border-b-[#10141E] pb-[15px] pl-[16px] bg-transparent outline-none text-white w-9/12	"
                type="text"
                id="search"
                value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
              />
            </label>
          </form>
        </div>
        <section className="Section px-[24px] sm:px-[0px] mt-[40px] ">
          <div className="container">
            <h1 className="text-2xl sm:text-4xl	 text-white">Movies</h1>
            <div className="Wrapper grid grid-cols-4 mt-[32px] pr-[20px]">
              {isMovies
                .filter((item) => item.type === "Movie" && item.name.toLowerCase().includes(searchTerm.toLowerCase()))
                .map((item) =>  (
                  <div
                    className="section__card w-[200px] mb-[40px] md:w-[250px] "
                    key={item.id}
                  >
                    <div className="relative card__slider cursor-pointer">
                      <img src={item.image} alt="" />

                      <div
                        className="slider_card absolute inset-0 flex items-center justify-center"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.534)" }}
                      >
                        <button
                          className="flex items-center gap-5 p-2.5 pr-5"
                          style={{
                            borderRadius: "28.5px",
                            backgroundColor: "rgba(255, 255, 255, 0.411)",
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M0 15C0 6.7125 6.7125 0 15 0C23.2875 0 30 6.7125 30 15C30 23.2875 23.2875 30 15 30C6.7125 30 0 23.2875 0 15ZM21 14.5L12 8V21L21 14.5Z"
                              fill="white"
                            />
                          </svg>
                          <span>Play</span>
                        </button>
                      </div>
                      <div
                        onClick={() => ActiveClick(item.id)}
                        className="slider__card-icon absolute top-1 right-1 sm:top-5 sm:right-5 p-[10px]  z-1000 rounded-full"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.534)" }}
                      >
                        <svg
                          className={`slider__card-icon-svg ${
                            active.includes(item.id) ? "slider__active" : ""
                          }`}
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="14"
                          viewBox="0 0 12 14"
                          fill="none"
                        >
                          <path
                            d="M10.7112 0.771005L10.7215 0.775484L10.7319 0.779653C10.7992 0.806575 10.8386 0.840492 10.8705 0.886923C10.9032 0.934576 10.9167 0.977859 10.9167 1.03635V12.9636C10.9167 13.0221 10.9032 13.0654 10.8705 13.1131C10.8386 13.1595 10.7992 13.1934 10.7319 13.2203L10.7237 13.2236L10.7156 13.2271C10.7107 13.2292 10.6807 13.2407 10.6094 13.2407C10.5085 13.2407 10.4397 13.2142 10.3686 13.15L6.3572 9.2346L5.83333 8.72327L5.30946 9.2346L1.29754 13.1505C1.21287 13.2276 1.14206 13.25 1.05729 13.25C1.02004 13.25 0.988249 13.2433 0.955471 13.229L0.945175 13.2245L0.934749 13.2203C0.867434 13.1934 0.828051 13.1595 0.796199 13.1131C0.763509 13.0654 0.75 13.0221 0.75 12.9636V1.03635C0.75 0.977859 0.763509 0.934576 0.796198 0.886924C0.828051 0.840491 0.867435 0.806574 0.93475 0.779653L0.945175 0.775484L0.95547 0.771004C0.988248 0.756743 1.02004 0.75 1.05729 0.75H10.6094C10.6466 0.75 10.6784 0.756743 10.7112 0.771005Z"
                            stroke-width="1.5"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex items-center gap-[5px] text-white mt-[8px]">
                      <span className="opacity-75">{item.date}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="3"
                        height="3"
                        viewBox="0 0 3 3"
                        fill="none"
                      >
                        <circle
                          opacity="0.5"
                          cx="1.5"
                          cy="1.5"
                          r="1.5"
                          fill="white"
                        />
                      </svg>
                      <img src={item.icon} alt="" />
                      <span className="opacity-75">{item.type}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="3"
                        height="3"
                        viewBox="0 0 3 3"
                        fill="none"
                      >
                        <circle
                          opacity="0.5"
                          cx="1.5"
                          cy="1.5"
                          r="1.5"
                          fill="white"
                        />
                      </svg>
                      <span className="opacity-75">{item.ln}</span>
                    </div>
                    <h2 className="text-1xl sm:text-2xl text-white">
                      {item.name}
                    </h2>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Movies;
