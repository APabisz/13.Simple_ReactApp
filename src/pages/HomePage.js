import React from "react"
import Article from "../components/Article"

const articles = [
  {
    id: 1,
    title: "Czym jest teoria strun",
    author: "Jan Nowak",
    text:
      "111Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum atque odio perspiciatis nihil, error ullam earum accusantium numquam! Repellat nostrum assumenda facere recusandae reiciendis libero iure, fuga eligendi harum illum explicabo unde, id commodi necessitatibus earum aut tenetur deleniti atque dolorum tempore. Velit, amet ipsum iure fugit error dolorum facere.",
  },
  {
    id: 12,
    title: "Czym jest struna",
    author: "Marcin Dzban",
    text:
      "222Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum atque odio perspiciatis nihil, error ullam earum accusantium numquam! Repellat nostrum assumenda facere recusandae reiciendis libero iure, fuga eligendi harum illum explicabo unde, id commodi necessitatibus earum aut tenetur deleniti atque dolorum tempore. Velit, amet ipsum iure fugit error dolorum facere.",
  },
  {
    id: 3,
    title: "Czym jest galaktyka",
    author: "Ania Kwiatkowska",
    text:
      "333Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum atque odio perspiciatis nihil, error ullam earum accusantium numquam! Repellat nostrum assumenda facere recusandae reiciendis libero iure, fuga eligendi harum illum explicabo unde, id commodi necessitatibus earum aut tenetur deleniti atque dolorum tempore. Velit, amet ipsum iure fugit error dolorum facere.",
  },
]
const HomePage = () => {
  const artList = articles.map((item) => <Article key={item.id} {...item} />)
  return <div className='home'>{artList}</div>
}

export default HomePage
