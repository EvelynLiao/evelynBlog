import { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import HeroImg from '../assets/HeroImg.png'
import ArticleList from '../component/ArticleList';
import { ArticleContext } from '../context/ArticleContext';
import { AuthContext } from '../context/AuthContext';

const LandingPage = () => {
    const { currentUser } = useContext(AuthContext);
    const { articles } = useContext(ArticleContext)


    return (
      <div>
        <div className="bg-primary grid grid-cols-3 gap-4">
          <div className="col-span-2 p-11">
            <div className="text-6xl font-extrabold mb-6">
              Hello <span className="text-secondary">{currentUser.email} </span>
              , Welcome to BLOG !
            </div>
            <div className="text-4xl mt-3 mb-3">where words meet wonders.</div>

            <div>
              Blog is a place to unleash your voice, where stories come alive
              and creativity knows no bounds. Here, every keystroke ignites
              inspiration, making every post a journey into the extraordinary.
            </div>

            <div className="mt-6">
              <Link to="/write" className="button">
                Let's Blog
              </Link>
            </div>
          </div>

          <div>
            <img className="w-fit" src={HeroImg} alt="Hero Image" />
          </div>
        </div>

        <div className="w-full mt-5">
          <ArticleList layout="card" articles={articles} />
        </div>
      </div>
    );
}

export default LandingPage