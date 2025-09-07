import logo from './logo.svg'
import logo_icon from './logo_icon.svg'
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import star_icon from './star_icon.svg'
import rating_star from './rating_star.svg'
import sample_img_1 from './sample_img_1.png'
import sample_img_2 from './sample_img_2.png'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import step_icon_1 from './step_icon_1.svg'
import step_icon_2 from './step_icon_2.svg'
import step_icon_3 from './step_icon_3.svg'
import email_icon from './email_icon.svg'
import lock_icon from './lock_icon.svg'
import cross_icon from './cross_icon.svg'
import star_group from './star_group.png'
import credit_star from './credit_star.svg'
import profile_icon from './profile_icon.png'

export const assets = {
    logo,
    logo_icon,
    facebook_icon,
    instagram_icon,
    twitter_icon,
    star_icon,
    rating_star,
    sample_img_1,
    sample_img_2,
    email_icon,
    lock_icon,
    cross_icon,
    star_group,
    credit_star,
    profile_icon
}

export const stepsData = [
    {
      title: 'Describe Your Ideas',
      description: 'Simply type a description, and let your imagination guide the way.',
      icon: step_icon_1,
    },
    {
      title: 'See It Come to Life',
      description: 'Watch as our advanced AI quickly turns your words into a one-of-a-kind image.',
      icon: step_icon_2,
    },
    {
      title: 'Save & Share',
      description: 'Download your creation instantly or share it with ease across your social platforms.',
      icon: step_icon_3,
    },
  ];

export const testimonialsData = [
    {
        image:profile_img_1,
        name:'Robin Heu',
        role:'Content Creator',
        stars:5,
        text:`I've been using TextCanvas for almost 6 months, mostly for Instagram, and it’s been a total game changer, making my content creation smoother and faster.`
    },
    {
        image:profile_img_2,
        name:'Mitchel William',
        role:'Travel Blogger',
        stars:4,
        text:`As a travel blogger, I’ve relied on TextCanvas for almost one year, mostly for Instagram, and it has made sharing my journeys so much easier and more creative.`
    },
    {
        image:profile_img_1,
        name:'Vito Carloane',
        role:' Graphic Designer',
        stars:5,
        text:`I've been using TextCanvas for nearly three months, primarily for my design work, and it’s been a fantastic tool, streamlining my creative process effortlessly.`
    },
]

export const plans = [
    {
      id: 'Basic',
      price: 10,
      credits: 100,
      desc: 'Best for personal use.'
    },
    {
      id: 'Advanced',
      price: 50,
      credits: 500,
      desc: 'Best for business use.'
    },
    {
      id: 'Business',
      price: 250,
      credits: 5000,
      desc: 'Best for enterprise use.'
    },
  ]