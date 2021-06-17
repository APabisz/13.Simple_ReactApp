import React from "react"
import Article from "../components/Article"

const articles = [
  {
    id: 1,
    title:
      "German biotech CureVac's stock plunges 50% after its COVID-19 vaccine candidate failed a clinical trial",
    author: "Shalini Nagarajan",
    text: "Summary List PlacementCureVac's shares tumbled by as much as 50% in Thursday's pre-market trading session after the German pharmaceutical firm said its COVID-19 vaccine candidate failed in a clinical trial.\nInterim analysis of data from about 40,000 volunteer…",
  },
  {
    id: 12,
    title:
      "Ford CEO hints at Tesla Model S Plaid racing the Mustang Mach-E 1400, but why?",
    author: "Fred Lambert",
    text: "The incredible performance of the new Tesla Model S Plaid has captured the attention of many in the auto industry since the unveiling last week and now we learn that even Ford CEO Jim Farley is interested in racing it against the Mustang Mach-E 1400. \nBut why…",
  },
  {
    id: 3,
    title:
      "Mark Cuban 'Hit' by Titan Crypto Crash As Coin's Price Falls to Near Zero",
    author: "Ed Browne",
    text: "The token, linked to the Iron Finance stablecoin project, plummeted on Wednesday in what one investor said was a panic sell.",
  },
  {
    id: 4,
    title:
      "CureVac stock plunges after mRNA Covid vaccine falls short on protection",
    author: "Naomi Kresge and Tim Loh",
    text: "The shares plunged more than 52% in German trading, wiping out almost $9.6 billion in market value.",
  },
  {
    id: 5,
    title:
      "10 things in tech: Zuck's no longer a top CEO, Google salaries, Apple health clinics",
    author: "Jordan Parker Erb",
    text: "Summary List PlacementGood morning and welcome to 10 Things in Tech. If this was forwarded to you, sign up here. \nLet's get started.\n1. Companies like Amazon, Twitter, and Goldman Sachs are pursuing vastly different post-pandemic office policies. Some are emb…",
  },
]
const HomePage = () => {
  const artList = articles.map((item) => <Article key={item.id} {...item} />)
  return <div className='home'>{artList}</div>
}

export default HomePage
