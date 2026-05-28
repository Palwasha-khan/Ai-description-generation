const generatePrompt = (category, material, occasion) => {
    return `You are a professional jewelry copywriter 
    for a luxury handmade jewelry brand.
    
    Generate the following for this jewelry product:
    1. Product Title (max 10 words, catchy)
    2. Product Description (3-4 sentences, elegant tone)
    3. Instagram Caption (engaging, with emojis)
    4. 10 Relevant Hashtags
    
    Jewelry Details:
    - Category: ${category}
    - Material: ${material}
    - Occasion: ${occasion}
    
    Format your response as JSON like this:
    {
        "title": "...",
        "description": "...",
        "caption": "...",
        "hashtags": ["...", "..."]
    }
    
    Only return the JSON. No extra text.`
}

export default generatePrompt