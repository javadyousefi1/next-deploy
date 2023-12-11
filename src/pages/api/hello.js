// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  res.status(200).json({ name: "API route end points" });
}
