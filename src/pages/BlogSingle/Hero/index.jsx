import React from 'react'
import BlogHeroImg from '../../assets/Image.svg'
import BlogUserImg from '../../assets/User.png'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function BlogSingle(props) {
  // console.log(props);
  
  return (
    <div>
    <div className='single-blog-header'>
        <div className='container mx-auto my-3'>
          <div className='row'>
            <div className='xl:12 md:8 lg:6'>
              <div className='single-blog-text text-center'>
                <div className='single-blog-categories bg-gray text-violet px-[17px] py-[4px] rounded-full inline-block'>
                  <p>Business</p>
                </div>
                <h1 className='text-[55px] text-indigo flex items-center py-3 font-medium'>Great productivity apps you can download
                for free this week on iPhone</h1>
              </div>
              <hr className='border-dashed text-slate border-2'/>
              <div className='single-blog-date text-center my-3'>
                <p className='text-indigo'>May 02, 2022 <span className='text-blue'>•</span> 3 min read</p>
              </div>
            </div>
            <div className='single-blog-image'>
              <img className='w-10' src={BlogHeroImg}/>
            </div>
            <div className='blog-user-detail flex justify-between items-center my-4'>
            <div className='blog-user-image flex items-center'>
              <img className='rounded-full w-[94px] h-[94px]' src={BlogUserImg}/> 
            <div className='blog-user-detail'>
              <h1 className='text-[35px] font-medium text-indigo'>{props.userName}</h1>
              <p className='text-blue text-[20px] leading-8 font-normal'>Desinger</p>
            </div>
            </div>
            <div className='blog-user-social flex text-darkblue text-[18px] gap-[33px]'>
              <a href='#'><FaInstagram/></a>
              <a href='#'><FaFacebook/></a>
              <a href='#'><FaTwitter/></a>
            </div>
            </div>
            <hr className='border-dashed text-slate border-2'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogSingle