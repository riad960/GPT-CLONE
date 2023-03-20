// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import admin from 'firebase-admin'
import query from '@/lib/queryApi'
import type { NextApiRequest, NextApiResponse } from 'next'
import { adminDb } from '@/firebaseAdmin'

type Data = {
  answer: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const { prompt,chatId,model,session } = req.body
    if(!prompt){
        res.status(404).json({
            answer:"Please provide a prompt !"
        })
        return
    }
    if(!chatId){
        res.status(404).json({
            answer:"Please provide a valid chat ID!"
        })
        return
    }
    //gpt query
    const response = await query(prompt,chatId,model)
    const messages:Message={
        text: response || `Chat gpt was unable to find an answer for that` ,
        createdAt:admin.firestore.Timestamp.now(),
        user: {
            _id:"CHATGPT",
            name:"CHATGPT",
            avatar:"https://links.papareact.com/89k"
        }
    }
    await adminDb.collection('users').doc(session?.user?.email).collection('chats').doc(chatId).collection('messages').add(messages)
  res.status(200).json({ answer: messages.text })
}