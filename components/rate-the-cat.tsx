"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Star, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

// List of cat image URLs
const catImages = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl_wv2XFvJ1jrwe1SG4GQorW-VdYK-k_vEIg&s",
  "https://i.chzbgr.com/full/10410532096/h9CEF62E1/mogus824-15h-ago",
  "https://preview.redd.it/ktxuj7clhbkb1.jpg?width=1179&format=pjpg&auto=webp&s=b1afe6e579a3c3416659d16b039824e7b0dde873",
  "https://media.tenor.com/K2bnpusQYIMAAAAM/silly-cat.gif",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrH9T9R1bTyJqZEWLrtEnkVneWT4o-jA3MQPr67tAgG_MAJk8knmN9KXC0wFjxILm_69U&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWii2rKTD3FgFmJVzm3Z3-QXdHOQhqm_7aWQZk_XoE4CfPByvrmH2cFshN4Trv5CPkxzs&usqp=CAU",
  "https://i.chzbgr.com/full/10440423168/hB841208D",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQvszJFvztNGmK3ajwkfQDREvNpJdcAHuzIg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB8BELVjv2XE-w_8UjisnJiWWBkq3PkY5lXQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfomQxcoqm7J_b_sEwSwiWKN0g7VNHI3KH7TkWSR4kNryWhsIr7WdMOx3isxIpUaJPAq0&usqp=CAU",
  "https://thunderdungeon.com/wp-content/uploads/2025/02/funny-cats-29-20250212.jpg",
  "https://i.pinimg.com/736x/2e/f9/d1/2ef9d12fbb66abfaac9aeb6c3b49f69c.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDvrwVVn4HWz1gM_HnPIhZwy4KDQvPXXePTQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7GDrDktFxZIYwbj8HyoD8OpO1wZSv4XJWAA&s",
  "https://i.imgur.com/2O6ghX8.jpeg",
  "https://i.imgur.com/UCNmMn9.jpeg",
  "https://i.imgur.com/7jq4GHH.jpeg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAzWEEKlIZgNvDm6zYt9XfjYLEnSrQDP76PQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr5TC_YqYwFd-7vpo8gMSxmPzHYcfuNPjI6OA9_swIyp4e7C5sL2kouzmZgPB0oX5X1Gw&usqp=CAU",
  "https://i.imgur.com/yiL4dpB.png",
  "https://i.imgur.com/u6xzUHP.png",
  "https://i.imgur.com/ElNR3US.png",
  "https://i.imgur.com/1LfCuCB.png",
  "https://i.imgur.com/avDPp3L.png",
  "https://i.imgur.com/CX7bXMz.png",
  "https://i.imgur.com/03GvzAp.png",
  "https://i.imgur.com/WtgrWOK.png",
  "https://i.imgur.com/Q5b4y7x.png",
  "https://i.imgur.com/wTPUzVc.png",
  "https://i.imgur.com/Y0DBAg7.png",
  "https://i.imgur.com/EDQiLky.png",
  "https://i.imgur.com/U8I5VJv.jpeg",
  "https://i.ibb.co/Mk18RZQk/yellingatcatz2025-03-14-00-56-0194824e4e-d680-4fb9-9bfa-8bcd80adac0c.jpg",
  "https://i.ibb.co/VcV6YZXY/0d8379ea718bf74001ad69ade66a7252.webp",
  "https://i.ibb.co/Mk18RZQk/yellingatcatz2025-03-14-00-56-0194824e4e-d680-4fb9-9bfa-8bcd80adac0c.jpg",
"https://i.ibb.co/YB1x8r3X/Which-one-is-your-favourite-catmemes-yellingatcatz-sillycat-funnycats.jpg",
"https://i.ibb.co/hxXvQfVH/veryfreakyvro2025-02-26-22-47-39314c7399-ae10-473e-a924-a02998792067.jpg",
"https://i.ibb.co/VWw1CX5c/veryfreakyvro2025-02-26-22-47-395a19ad9d-0873-45b2-af3a-ce9d218ac5b2.jpg",
"https://i.ibb.co/4ZMV2V0B/veryfreakyvro2025-02-26-22-47-39f07b8ac6-9789-43d0-83a0-ce428cc46fc7.jpg",
"https://i.ibb.co/F4dWtDWB/veryfreakyvro2025-02-26-22-47-39eefcb14c-e075-4962-a29d-67baf8746b5e.jpg",
"https://i.ibb.co/WwTs0Tv/softcatmemes2025-02-22-18-59-1294c10de1-cb60-4caf-88d0-c23289304170.jpg",
"https://i.ibb.co/wVrV678/softcatmemes2025-02-22-18-59-0237d38812-8226-4c27-86c0-4021d9c7fbb6.jpg",
"https://i.ibb.co/rf4bQq7t/sillyanimalspost2025-04-19-11-35-02e540bcc2-21ea-4e10-8cfc-8c7a89ae43dc.webp",
"https://i.ibb.co/GQR53y5c/sillyanimalspost2025-04-19-11-35-02a0a152af-12c5-474e-bde0-b8a73843be99.webp",
"https://i.ibb.co/RT3bQPYm/sads.jpg",
"https://i.ibb.co/TMVFC5Gq/ofcoursecats2025-03-14-00-49-549bc98027-c293-43b4-939f-e88c888e9fd3.jpg",
"https://i.ibb.co/whCqLFQG/nochillshaggy2025-03-14-00-49-4260dcfd5d-519f-415d-91b4-6a8e09045420.jpg",
"https://i.ibb.co/hFN42TQY/negusflex-14031109-013117749.jpg",
"https://i.ibb.co/MySZ2796/mrs-miuki2025-04-19-11-24-49efad75f6-e6e2-4f9f-8907-d65165b26ce6.jpg",
"https://i.ibb.co/tw7Fg9bn/mlem-daily2025-02-18-12-08-41ceeb26e6-b948-45db-bdbe-3e54f01c28ed.webp",
"https://i.ibb.co/JFtM85g7/meow-citos2025-02-26-22-51-032438fde6-d655-4ed8-bb4e-a577e6a025f6.jpg",
"https://i.ibb.co/vx1GQ2CM/meow-citos2025-02-22-18-58-5803ab7a6f-a26f-4517-81be-62be1a001d11.jpg",
"https://i.ibb.co/DfkRq1yD/leroy-dacat2025-02-22-19-14-54b1153106-6582-4a07-82dd-0df8b61de461.jpg",
"https://i.ibb.co/tpVCPDnX/kitpost2025-03-05-14-25-05670f3d97-ce01-4abf-b172-90c2aa3158a3.jpg",
"https://i.ibb.co/RGyqmGzt/kitpost2025-03-05-14-25-0455f08a11-ef14-400d-b9ff-225a5b5cbb40.jpg",
"https://i.ibb.co/67qSv9bT/kitpost2025-03-05-14-25-051d4e7613-dd97-4579-9378-85d7b8884191.jpg",
"https://i.ibb.co/YFf0zg1q/kitpost2025-03-05-14-25-050ec333da-dae8-4850-89aa-22ef541af860.jpg",
"https://i.ibb.co/zWqPxcbD/kitpost2025-03-05-14-25-05d45b5627-c92d-49ce-aba6-ab2af3ae2a89.jpg",
"https://i.ibb.co/S4mN3ksM/kitpost2025-03-05-14-25-05d9c0b7d9-af61-445c-a1d8-d8bc1d98fe3a.jpg",
"https://i.ibb.co/QjqDSYVB/kitpost2025-03-05-14-25-05c95b1d58-c81c-446d-9e96-403b53660696.jpg",
"https://i.ibb.co/mrXKr59R/kitpost2025-03-05-14-25-05c9a19c3c-3d18-4edf-91d0-98d41c8e6faf.jpg",
"https://i.ibb.co/F43G0dVb/kitpost2025-03-05-14-25-05af933b39-8592-4f6c-99f6-2a9b53a3802f.jpg",
"https://i.ibb.co/wFK4WL13/kitpost2025-03-05-14-25-04cf88cc8e-33ad-4e76-99fa-ba75c882603c.jpg",
"https://i.ibb.co/Lz8BfxN2/IMG-20250331-073833-538.jpg",
"https://i.ibb.co/6Rj26jsJ/images-24.jpg",
"https://i.ibb.co/ymn97jxL/images-14.jpg",
"https://i.ibb.co/PZzzMrn6/images-13.jpg",
"https://i.ibb.co/DfcYfW9L/images-6.jpg",
"https://i.ibb.co/4g4Nzx0c/images-1.jpg",
"https://i.ibb.co/kVKHNFkD/funnykittensig2025-03-14-00-51-31b331184d-6f4a-4c16-8082-51f259757d6b.jpg",
"https://i.ibb.co/pvjwV9KV/cussypatmemes2025-04-19-11-34-4895267a02-802d-4181-b849-4db6770b9efc.jpg",
"https://i.ibb.co/0RdST4mw/cussypatmemes2025-04-19-11-34-0309170aae-b4d6-4d27-9339-cce9d3e986e5.jpg",
"https://i.ibb.co/RpBM5jrj/cussypatmemes2025-04-19-11-34-13106c8889-8b65-4300-b6c1-e2b0871f7d68.jpg",
"https://i.ibb.co/cKRMC4kX/cussypatmemes2025-04-19-11-34-4876c107d1-2162-43f6-a66d-0c9233d9a701.jpg",
"https://i.ibb.co/xSf6t6kT/cussypatmemes2025-04-19-11-34-4819d96a21-54dd-40b4-a3b3-66a7bf5759fe.jpg",
"https://i.ibb.co/FkKcH5vW/cussypatmemes2025-04-19-11-34-486b4d1d80-7777-4fed-976d-c653afc714b8.jpg",
"https://i.ibb.co/twScmThv/cussypatmemes2025-04-19-11-34-48e48814b2-b8a4-4b0b-b81c-ca6d458df703.jpg",
"https://i.ibb.co/JW0PM4Hf/cussypatmemes2025-04-19-11-34-48df36176b-36ec-4fe2-a838-ce38b7443a95.jpg",
"https://i.ibb.co/C3J77R3W/cussypatmemes2025-04-19-11-34-48dd47e27d-d6fb-4cc7-9da2-18bcba530180.jpg",
"https://i.ibb.co/XkYRLfNv/cussypatmemes2025-04-19-11-34-48c98aae08-1978-4fad-9c56-31f34be2c2ed.jpg",
"https://i.ibb.co/nM5YkdNM/cussypatmemes2025-04-19-11-34-48bab319bf-1323-49a0-b362-edc32de572b3.jpg",
"https://i.ibb.co/Psmf4mNq/cussypatmemes2025-04-19-11-34-48a559df94-f965-4bf4-adfa-d3e06a9f6ebb.jpg",
"https://i.ibb.co/pvJq9xcB/cussypatmemes2025-04-19-11-33-565ab7ae4f-e29a-4d15-9e65-d28204acd7d1.jpg",
"https://i.ibb.co/KzFL6H8T/cursedcat-s2025-03-14-00-55-2185154a01-4d63-49f3-9a86-85308c48200a.jpg",
"https://i.ibb.co/QvQbcmkT/cussypatmemes2025-04-19-11-33-516dfd5664-80ac-49fd-80c6-d61d7d88f1f3.jpg",
"https://i.ibb.co/RGBs32YF/cursedcat-s2025-03-14-00-55-212b14a43e-55f4-4087-830e-7a0ff5534540.jpg",
"https://i.ibb.co/LdzD4yny/cursedcat-s2025-03-14-00-55-21e5dcce46-d25e-4760-b992-684c84e222a1.jpg",
"https://i.ibb.co/3YL9mVrT/cursedcat-s2025-03-14-00-55-21cdfaf6c8-6b11-490c-813e-059ecf145ab1.jpg",
"https://i.ibb.co/hxsBdd06/cultofbiscuit2025-04-19-11-25-03bd6cb8eb-52b1-4918-8788-3e79f1ef3e1c.jpg",
"https://i.ibb.co/PsFySzjg/clown-egy2025-02-24-02-18-48a309a589-a841-4e88-a1da-b513b634ace4.jpg",
"https://i.ibb.co/9D9q4qF/catswithmeme-14031029-212226149.jpg",
"https://i.ibb.co/p5NZFPT/catsarecursed2025-03-04-23-10-15c5b029ed-a5cd-45f9-ace2-c263e4457aa2.jpg",
"https://i.ibb.co/1f0LNSvs/catlandscentral-14031118-231947173.jpg",
"https://i.ibb.co/JjbC8nwH/cataggression2025-03-14-00-50-08f68ef9db-e017-4e49-9940-f8cdb3ce0bdd.jpg",
"https://i.ibb.co/TBbwhy1H/avantgardecats2025-04-19-11-24-167aeebcfb-d345-4a3e-ad9b-650c47d1b10a.jpg",
"https://i.ibb.co/FLspp73F/491517672-17939937252003381-3248500014411937066-n.jpg",
"https://i.ibb.co/4ZkyLr0t/491894572-17987432828805994-619346713698829954-n.webp",
"https://i.ibb.co/bMNzkHqS/491496416-17939937279003381-3394495674740941535-n.jpg",
"https://i.ibb.co/cS88xSsN/491499597-17986441154804965-200410280253538260-n.jpg",
"https://i.ibb.co/QFs1bxd8/491466642-17987432783805994-909561219449660333-n.webp",
"https://i.ibb.co/TM5yY3NT/491465135-17987432801805994-2681593063630586383-n.webp",
"https://i.ibb.co/G48JYgv8/491462465-17987432792805994-5979299554778453605-n.webp",
"https://i.ibb.co/k6y0q8Bv/491440693-17986857749805994-7978302210101004321-n.webp",
"https://i.ibb.co/8gDZWgWd/491437160-17986857809805994-8046996402462192430-n.webp",
"https://i.ibb.co/SXCgPPrY/491437103-17986857719805994-7955173090622451236-n.webp",
"https://i.ibb.co/dskQBwHt/491416636-17939937234003381-6478776861218750629-n.jpg",
"https://i.ibb.co/Xf5NFgvB/491415848-17939937261003381-7744406792252041020-n.jpg",
"https://i.ibb.co/wNmbV2GL/491220779-17986857821805994-130319310132548389-n.webp",
"https://i.ibb.co/p65HqLTf/490714872-17986857782805994-1996363045641765662-n.webp",
"https://i.ibb.co/gLx7wS5r/490607468-17987432765805994-9204579194175189088-n.webp",
"https://i.ibb.co/FqNsH2RD/490565689-17939937216003381-4488119148550676058-n.jpg",
"https://i.ibb.co/pvJGdQbb/490313761-17986857761805994-5623758289792314882-n.webp",
"https://i.ibb.co/ds2Zdd3r/490265396-17987432819805994-5291357441622612598-n.webp",
"https://i.ibb.co/gLSFXhsX/490163980-17986483463805994-6421819183114926834-n.webp",
"https://i.ibb.co/5WmLmYtL/489989405-17986483511805994-413082346591552219-n.webp",
"https://i.ibb.co/zWxP0TvS/489780568-17986279037805994-7827379558643622640-n.webp",
"https://i.ibb.co/gbST0Pkz/489743997-17986278992805994-9140607533639031602-n.webp",
"https://i.ibb.co/q3PjGM02/489697110-17986279016805994-3024162180477498633-n.webp",
"https://i.ibb.co/wN13tZ3D/489620436-17986279025805994-1446381322449696808-n.webp",
"https://i.ibb.co/d4tyftj4/489556397-17986279046805994-2575263689416921947-n.webp",
"https://i.ibb.co/JW7F7Cp2/489367898-17986279088805994-7294534149338439834-n.webp",
"https://i.ibb.co/0pVGJFpZ/488611398-17985956048805994-6386098786703475201-n.webp",
"https://i.ibb.co/jknRqVBg/488508902-17985956039805994-681846374451056345-n.webp",
"https://i.ibb.co/k64RyHH6/488396752-17938759788003381-6990683392199629393-n.jpg",
"https://i.ibb.co/VcWfP8ST/488262968-17938759743003381-6623037882660710189-n.jpg",
"https://i.ibb.co/ymRXknhX/488116348-17938759761003381-2010567514096540219-n.jpg",
"https://i.ibb.co/7dJy9m8d/487828334-17938759779003381-5997925141035529407-n.jpg",
"https://i.ibb.co/XZh9SxhF/487807191-17986857740805994-6976396213986503039-n.webp",
"https://i.ibb.co/N6ghNZbc/485267926-1982767752244911-4083002200176828201-n.jpg",
"https://i.ibb.co/rKrFhcKc/484182199-17983141325805994-259591457688156166-n.webp",
"https://i.ibb.co/20gkK1pk/484148130-17983141244805994-4777297690186322500-n.webp",
"https://i.ibb.co/Y7ckFFdC/484098781-17983141253805994-7823632846960326736-n.webp",
"https://i.ibb.co/VY5F5Gbg/484077573-17983141277805994-973848901013840075-n.webp",
"https://i.ibb.co/jPZ2vFB4/484070806-17983141190805994-7909651841505350800-n.webp",
"https://i.ibb.co/tM3LxWPY/483925078-17983141208805994-1843766162807906994-n.webp",
"https://i.ibb.co/rK5cXXBD/483906555-17983141286805994-2355118987265998487-n.webp",
"https://i.ibb.co/dsbHSYH8/483851733-17983141199805994-3218994251107766408-n.webp",
"https://i.ibb.co/vxrvDdJh/612859ac90545588c2d56cdfb83c781e.webp",
"https://i.ibb.co/78zHQ9v/13.png",
"https://i.ibb.co/bj6zGHVk/2834a2cace125f3687ccfdb3abd6de29.png",
"https://i.ibb.co/v6bsNQCr/14.png",
"https://i.ibb.co/xwxwGG9/11.png",
"https://i.ibb.co/N2YHwQht/12.webp",
"https://i.ibb.co/bRR6s8vX/10.png",
"https://i.ibb.co/v4pTqzbB/6.png",
"https://i.ibb.co/G3f3rFQS/9.png",
"https://i.ibb.co/cSQCzfSM/8.png",
"https://i.ibb.co/RTs60k6q/7.png",
"https://i.ibb.co/GQRFyX6w/5.png",
"https://i.ibb.co/hRqStbwf/4.png",
"https://i.ibb.co/bRDv5kT3/2.png",
"https://i.ibb.co/5hzhrZSX/1.png",
"https://i.ibb.co/XZsQCnFm/00piumcats2025-03-14-01-19-5251ba3578-17d4-4dd7-9a2e-5d4d14bd88df.jpg",
"https://i.ibb.co/VcV6YZXY/0d8379ea718bf74001ad69ade66a7252.webp",
  "https://i.ibb.co/67GZLthT/sports-memes-daily-2025-04-19-11-26-156df120e9-e564-407f-a7b6-e773eb710eaf.jpg",
]

const funnyPhrases = [
  "His ass ain't getting the treats tonight.",
  "That's my Uber driver btw.",
  "His ass is tweakin.",
  "He's living his best life.",
  "He pisses me off.",
  "He's getting beaten tonight.",
  "He's living his best life.",
  "Someone's been naughty today.",
  "This cat's too cool for you.",
  "Purr for mommy.",
  "How silly is he.",
  "Move yo ass.",
  "That's so silly.",
  "Who invited that cat.",
  "He's tweakin fr fr.",
  "Your ass is not getting that tip.",
  "Wooow.",
  "Meow Meow.",
  "Someone stop him!",
  "Boing Boing.",
  "I'm Running Out Of Ideas.",
  "😼😼😼",
  "Devil fella.",
  "Sybau 😭😭😭.",
  "Are You Sure ?",
  "I have jealousy issues for some reasons.",
  "Will She ever text me?",
  "I'm addicted to this.",
  "HE IS SO SILLY :3",
  ":3",
  "Evil Thoughts >:)",
  "Woah.",
  "I know where you live",
  "Btw i took so long to make this messages, if you care",
  "Whata fuck",
  "His whiskers are wildin' tonight.",
  "That's my pizza delivery cat, yo.",
  "He's vibin' way too hard.",
  "Purrrr.",
  "He's begging for a timeout.",
  "Shake that booty.",
  "Who is this diva???",
  "He's purring with an attitude.",
  "Move that fluffy butt!",
  "She's smashing the dishes",
  "He's out here acting unwise.",
  "No treats for that ass.",
  "Mrow mrow, who's the boss now?",
  "Bounce bounce, kitty's loose!",
  "He's giving devilish side-eye.",
  "He pmo fr fr.",
  "WOOOOAH :O",
  ":O",
  "I'm jealous of his nap schedule.",
  "Will he ever stop being silly?",
  "Addicted to his chaos fr.",
  ">:3 evil kitty.",
  "He's on life support.",
  "No tip for that hairball move.",
  "I spent way too long on this list, lol.",
  "i'm have feeling towards you",
  "i have crush on you.",
  "Heyyyy :D",
  "Shout out to @mxliich for helping making this website",
  "LEBRON JAMES",
  "Someome is getting fired today",
  "Stole your balls >:)",
  "Wait-. What.",
  ":D",
  "he's alcoholic btw",
  "Put that paw down.",
  "Guess what, your fired",
  "Yo is this working?",

]

// Type for our rating statistics
type RatingStats = {
  [key: number]: {
    totalRatings: number
    sumRatings: number
    averageRating: number
  }
}

// Function to generate a random rating between 3.0 and 5.0
const generateRandomRating = () => {
  // Generate a random number between 3.0 and 5.0
  return 4.0 + Math.random() * 1.0
}

// Function to generate a random number of ratings between 5 and 100
const generateRandomRatingCount = () => {
  return Math.floor(5 + Math.random() * 95)
}

export default function RateTheCat() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [recentImageIndices, setRecentImageIndices] = useState<number[]>([])
  const [imageUsageCount, setImageUsageCount] = useState<Record<number, number>>({})
  const [recentPhraseIndices, setRecentPhraseIndices] = useState<number[]>([])
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [funnyText, setFunnyText] = useState("")
  const [imageLoading, setImageLoading] = useState(true)
  const [showInfo, setShowInfo] = useState(false)
  const [ratingStats, setRatingStats] = useState<RatingStats>({})

  // Track recently used items to avoid repetition
  const MAX_RECENT_ITEMS = Math.min(10, Math.floor(catImages.length / 2))
  const MAX_RECENT_PHRASES = Math.min(10, Math.floor(funnyPhrases.length / 2))
  const MAX_USAGE_BEFORE_RESET = 3

  // Initialize random ratings for all images
  useEffect(() => {
    const initialRatingStats: RatingStats = {}

    // Generate random ratings for each image
    catImages.forEach((_, index) => {
      const avgRating = generateRandomRating()
      const totalRatings = generateRandomRatingCount()

      initialRatingStats[index] = {
        totalRatings: totalRatings,
        sumRatings: avgRating * totalRatings,
        averageRating: avgRating,
      }
    })

    setRatingStats(initialRatingStats)
  }, [])

  // Get a random cat image that hasn't been shown recently
  const getRandomCatImage = () => {
    setImageLoading(true)

    // Create a list of available indices with weights based on usage
    const availableIndices = Array.from({ length: catImages.length }, (_, i) => i)
      .filter((index) => !recentImageIndices.includes(index))
      .map(index => ({
        index,
        weight: 1 / ((imageUsageCount[index] || 0) + 1) // Less used images have higher weight
      }))

    // If all images have been recently shown, reset the tracking
    if (availableIndices.length === 0) {
      const newIndex = Math.floor(Math.random() * catImages.length)
      setCurrentImageIndex(newIndex)
      setRecentImageIndices([newIndex])
      setImageUsageCount(prev => ({
        ...prev,
        [newIndex]: (prev[newIndex] || 0) + 1
      }))
      return
    }

    // Calculate total weight
    const totalWeight = availableIndices.reduce((sum, item) => sum + item.weight, 0)
    
    // Pick a random index based on weights
    let random = Math.random() * totalWeight
    let selectedIndex = availableIndices[0].index
    
    for (const item of availableIndices) {
      random -= item.weight
      if (random <= 0) {
        selectedIndex = item.index
        break
      }
    }

    // Update current image and track it
    setCurrentImageIndex(selectedIndex)
    setRecentImageIndices((prev) => {
      const updated = [selectedIndex, ...prev]
      return updated.slice(0, MAX_RECENT_ITEMS)
    })
    setImageUsageCount(prev => ({
      ...prev,
      [selectedIndex]: (prev[selectedIndex] || 0) + 1
    }))

    // Reset usage counts if any image has been used too many times
    if (Object.values(imageUsageCount).some(count => count >= MAX_USAGE_BEFORE_RESET)) {
      setImageUsageCount({})
    }
  }

  // Get a random funny phrase that hasn't been shown recently
  const getRandomFunnyPhrase = () => {
    // Create a list of available indices (not recently used)
    const availableIndices = Array.from({ length: funnyPhrases.length }, (_, i) => i).filter(
      (index) => !recentPhraseIndices.includes(index),
    )

    // If all phrases have been recently shown, reset the tracking
    if (availableIndices.length === 0) {
      const newIndex = Math.floor(Math.random() * funnyPhrases.length)
      setFunnyText(funnyPhrases[newIndex])
      setRecentPhraseIndices([newIndex])
      return
    }

    // Pick a random index from available ones
    const randomIndex = Math.floor(Math.random() * availableIndices.length)
    const newPhraseIndex = availableIndices[randomIndex]

    // Update current phrase and track it
    setFunnyText(funnyPhrases[newPhraseIndex])
    setRecentPhraseIndices((prev) => {
      const updated = [newPhraseIndex, ...prev]
      return updated.slice(0, MAX_RECENT_PHRASES)
    })
  }

  useEffect(() => {
    getRandomCatImage()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleRatingClick = (selectedRating: number) => {
    setRating(selectedRating)
  }

  const handleSubmit = () => {
    if (rating > 0) {
      // Get random funny phrase
      getRandomFunnyPhrase()
      setSubmitted(true)

      // Update rating statistics
      setRatingStats((prev) => {
        const stats = { ...prev }
        if (!stats[currentImageIndex]) {
          stats[currentImageIndex] = {
            totalRatings: 0,
            sumRatings: 0,
            averageRating: 0,
          }
        }

        stats[currentImageIndex].totalRatings += 1
        stats[currentImageIndex].sumRatings += rating
        stats[currentImageIndex].averageRating =
          stats[currentImageIndex].sumRatings / stats[currentImageIndex].totalRatings

        return stats
      })
    }
  }

  const handleNextCat = () => {
    setRating(0)
    setHoveredRating(0)
    setSubmitted(false)
    setFunnyText("")
    getRandomCatImage()
  }

  const toggleInfo = () => {
    setShowInfo((prev) => !prev)
  }

  // Get current image stats
  const currentStats = ratingStats[currentImageIndex] || {
    totalRatings: 0,
    averageRating: 0,
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <motion.div
        className="bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50 rounded-2xl shadow-xl p-6 md:p-8 border border-pink-100 relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-purple-200/40 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -right-32 w-80 h-80 bg-pink-200/40 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-16 left-1/3 w-72 h-72 bg-purple-100/40 rounded-full blur-3xl"></div>
        </div>

        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text relative z-10"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Rate the Cat
        </motion.h1>

        {/* Rating stats display */}
        <div className="mb-6 text-center">
          <div className="inline-block bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
            <span className="text-lg font-medium text-gray-700">
              ⭐ {currentStats.averageRating.toFixed(1)} ({currentStats.totalRatings} ratings)
            </span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-8 relative z-10">
          {/* Left column - Image (full width on mobile, left side on desktop) */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="w-full aspect-square relative rounded-xl overflow-hidden shadow-lg border-4 border-white/80"
              >
                {imageLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
                <Image
                  src={catImages[currentImageIndex] || "/placeholder.svg"}
                  alt="Cat to rate"
                  fill
                  className="object-cover"
                  priority
                  onLoad={() => setImageLoading(false)}
                  onError={() => setImageLoading(false)}
                />
              </motion.div>
            </AnimatePresence>
          </div>
          
        <div className="flex flex-col lg:flex-row lg:gap-8 relative z-10">
          {/* Left column - Image (full width on mobile, left side on desktop) */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="w-full aspect-square relative rounded-xl overflow-hidden shadow-lg border-4 border-white/80"
              >
                {imageLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
                <Image
                  src={catImages[currentImageIndex] || "/placeholder.svg"}
                  alt="Cat to rate"
                  fill
                  className="object-cover"
                  priority
                  onLoad={() => setImageLoading(false)}
                  onError={() => setImageLoading(false)}
                />

          {/* Right column - Rating UI (full width on mobile, right side on desktop) */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="flex justify-center space-x-3 mb-8">
              {[1, 2, 3, 4, 5].map((star) => (
                <motion.button
                  key={star}
                  onClick={() => handleRatingClick(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  className="focus:outline-none transform transition-transform hover:scale-110"
                  disabled={submitted}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Star
                    size={40}
                    className={`transition-colors duration-200 ${
                      (hoveredRating ? star <= hoveredRating : star <= rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                </motion.button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div
                  key="submit"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex justify-center"
                >
                  <Button
                    onClick={handleSubmit}
                    disabled={rating === 0}
                    className="px-10 py-6 rounded-full shadow-lg transition-all transform hover:scale-105 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium text-lg"
                    size="lg"
                  >
                    Submit
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  key="next"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center space-y-6"
                >
                  <motion.p
                    className="text-center text-lg font-medium italic text-gray-700 px-6 py-4 bg-white/70 rounded-lg shadow-sm w-full backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {funnyText}
                  </motion.p>
                  <Button
                    onClick={handleNextCat}
                    className="px-10 py-6 rounded-full shadow-lg transition-all transform hover:scale-105 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-medium text-lg"
                    size="lg"
                  >
                    Next Cat!
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Info button */}
        <div className="absolute top-4 right-4 z-20">
          <Button
            onClick={toggleInfo}
            variant="outline"
            size="icon"
            className="rounded-full bg-white/80 hover:bg-white w-8 h-8 flex items-center justify-center"
          >
            <Info className="w-4 h-4 text-black" />
            <span className="sr-only">Information</span>
          </Button>
        </div>

        {/* Info modal */}
        {showInfo && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowInfo(false)}
          >
            <motion.div
              className="bg-white rounded-xl p-6 max-w-md w-full max-h-[80vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                About Rate the Cat
              </h3>

              {/* EDITABLE CONTENT SECTION - START */}
              <div className="space-y-4 text-gray-700">
                <h4>So uh welcome to "Rate The Cat" website</h4>

                <p>
                  Yeah. We really made a whole website just to rate cats. Why? Because we actually have some mental
                  problems
                </p>

                <p>
                  I was bored and thought, "Why not make a website to rate cat pics and memes?" <br />
                  So after a little effort, five cups of coffee, a budget of exactly $0 (yes, I'm broke), and ten
                  arguments with the other developer… <br />
                  We finally made it!
                  <br />
                  <br />
                </p>

                <p>
                  Now you can rate cats on your phone whenever you're bored. You're welcome.
                  <br />
                  <br />
                </p>

                <p>
                  Is this useful? <br />
                  No. <br />
                  Will it cure your depression? <br />
                  Possibly. <br />
                  Will it make you question reality? <br />
                  Absolutely. <br />
                  <br />
                </p>

                <p>
                  Have a Suggestion / Found a Bug? <br />
                  Contact us on Instagram and we'll try to fix it or add your genius idea if it's actually good. <br />
                  <br />
                  Our beautiful dev queen: <a href="https://instagram.com/loyalyaraa/">@loyalyaraa</a>
                  <br />
                  The nerdy developer: <a href="https://instagram.com/mxliich/">@mxliich</a> <br />
                  <br />
                  If the site breaks, we'll try our best to fix it… <br />
                  But like, sometimes we're lazy. (Especially @mxliich, btw. )<br />
                  <br />
                </p>
                <p>
                  Wanna support this nonsense? <br />
                  Send it to your friends.
                  <br />
                  Post it on your Instagram story and tag us (if you can).
                  <br />
                  Send this to your crush. ( that actually might be the cutest thing to do )<br />
                  Or just send us a nice message—we'd totally love that and cry in tears.
                  <br />
                </p>
              </div>
              {/* EDITABLE CONTENT SECTION - END */}

              <div className="mt-6 flex justify-end">
                <Button onClick={() => setShowInfo(false)}>Close</Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}
