// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import openai from '@/lib/chatgpt'
import type { NextApiRequest, NextApiResponse } from 'next'


type Data = {
  modelOptions:Option[]
}
type Option ={
    label: string,
    value: string
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
   const models = await openai.listModels().then(res=>res.data.data)
   const modelOptions=models.map(model=>({
    value:model.id,
    label:model.id
   }))
  res.status(200).json({ modelOptions })
}