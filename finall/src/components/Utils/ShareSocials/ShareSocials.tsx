"use client"
import {
    FacebookShareButton, RedditShareButton, TelegramShareButton, TwitterShareButton, WhatsappShareButton, LinkedinShareButton, 
  } from 'next-share'
import css from "@/ui/ShareSocials/ShareSocials.module.scss";
import { FaFacebookF, FaRedditAlien, FaTelegram, FaXTwitter, FaWhatsapp, FaLinkedinIn } from "react-icons/fa6";


export default function ShareSocials(){
    return (
        <ul className={css.wrapper} >
            <FacebookShareButton url='#'  >
                <FaFacebookF/>
            </FacebookShareButton>
            <RedditShareButton url='#'>
                <FaRedditAlien/>
            </RedditShareButton>
            <TelegramShareButton url="#">
                <FaTelegram/>
            </TelegramShareButton>
            <TwitterShareButton url="#">
                <FaXTwitter/>
            </TwitterShareButton>
            <WhatsappShareButton url="#">
                <FaWhatsapp/>
            </WhatsappShareButton>
            <LinkedinShareButton url="#">
                <FaLinkedinIn/>
            </LinkedinShareButton>
        </ul>
    )
}