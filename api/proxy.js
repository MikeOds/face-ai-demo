export default async function handler(req, res) {
  const { image, prompt } = req.body;

  const response = await fetch("https://api.replicate.com/v1/predictions", {
    method: "POST",
    headers: {
      Authorization: "Token r8_I1UoitbMgQUnPozsPCBNBkNkfMKq2MY2tGRP8",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      version: "c3c59976e1bc4edb8aa90863a7ce2a45bc97a7c7ec72b7c5e5e22aa241dfbce0",
      input: {
        image: image,
        prompt: prompt
      }
    })
  });

  const data = await response.json();
  res.status(200).json(data);
}
