// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  id: number;
  course: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  const data = [
    { id: 1, course: "Web 3.0 and Metaverse" },
    { id: 2, course: "Artificial Intelligence" },
    { id: 3, course: "Cloud Native Computing" },
    { id: 3, course: "Ambient Computing and IoT" },
    { id: 5, course: "Network Automation" },
    { id: 6, course: "Genomics and Bioinformatics" },
    { id: 7, course: "Generative AI" },
  ];

  res.status(200).json(data);
}
