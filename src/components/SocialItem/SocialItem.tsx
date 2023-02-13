import { useState} from 'react'
import { Icon } from '@iconify/react'

const contacts = [
    { 
      icon: 'akar-icons:github-fill', 
      text: 'keqing',
      link: 'https://github.com/keqing77',
      color: 'hover:bg-[#374151]' },
    {
      icon: 'akar-icons:twitter-fill',
      text: 'lalalavard',
      link: 'https://twitter.com/lalalavard',
      color: 'hover:bg-[#00acee]'
    },
    {
      icon: 'simple-icons:stackoverflow',
      text: 'lalalavard',
      link: 'https://stackoverflow.com',
      color: 'hover:bg-[#f48225]'
    },
    {
      icon: 'bx:book-bookmark',
      text: 'Blog',
      link: 'https://keqingblog.netlify.app/',
      color: 'hover:bg-[#3681e6]',
      desc: 'Blog'
    },
    {
      icon: 'ant-design:zhihu-circle-filled',
      text: 'MurphyChen',
      link: 'https://www.zhihu.com',
      color: 'hover:bg-[#056de8]'
    },
    {
      icon: 'ri:bilibili-fill',
      text: 'MurphyChen__',
      link: 'https://space.bilibili.com',
      color: 'hover:bg-[#fb7299]'
    },
    { 
      icon: 'ri:qq-line', 
      text: '1095041759', 
      color: 'hover:bg-[#3abcff]'
    },
    { 
      icon: 'ri:wechat-2-line', 
      text: 'CoderLavard', 
      color: 'hover:bg-[#07c160]'
    }
]

const SocialItem = () => {
    const [ currentIndex, setCurrentIndex] = useState(1);

const toggle = (index: number) => {
    if (currentIndex === index) {
        setCurrentIndex( -1 );
    } else {
        setCurrentIndex( index );
    }
    }
  return (
    <ul className="flex flex-wrap list-none mt-5 p-0">
        {contacts.map( ({text,icon,link,color,desc},index) =>  
            <li 
            className="font-[Cute] mr-2 mt-2 h-10 relative"
            key={index}>
                <a 
                    className={`block px-3 py-2 item-bg-color decoration-none flex justify-center items-center rounded-md cursor-pointer title-color hover:text-white ease-linear duration-200 ${color}`}
                    href={link}
                    target="_blank"
                    onClick={ () => toggle(index)}
                >
                    <Icon
                    icon={icon}
                    width={icon.includes('skull') ? 19 : 22}
                    />
                    <span v-if="desc" className="ml-1 text-sm">{desc}</span>
                </a>
                {!link && index === currentIndex ? (
                    <div  className="text-sm mt-1 w-1 text-gray-text">
                    {text}
                    </div> ) : '' }
            </li>
        )}
  </ul>
  )
}

export default SocialItem





