export default async function handler(req, res) {
  try {
    const { image, prompt } = req.body;

    if (!image || !prompt) {
      return res.status(400).json({ error: "Missing image or prompt" });
    }

    const replicateResponse = await fetch("https://api.replicate.com/v1/predictions", {
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

    const data = await replicateResponse.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Internal server error", details: error.message });
  }
}
