export const users = [
    {
      username: "utkarsh__raosahab",
      name: "उत्कर्ष यादव ☠️",
      bio: "💗ॐ नमः शिवाय",
      followers: 8759,
      following: 571,
      profilePicture: "/images/utkarsh.jpg", // Profile Image URL
      reels: [
        {
          reelId: "r1",
          videoUrl: "https://example.com/reel1.mp4",
          likes: 5000,
          comments: [
            { user: "alice123", text: "Amazing video!" },
            { user: "mark99", text: "🔥🔥🔥" },
          ],
          shares: 300,
        },
      ],
      posts: [
        {
          postId: "p1",
          imageUrl: "https://via.placeholder.com/500",
          caption: "Sunset vibes 🌅 #Nature",
          likes: 2500,
          comments: [
            { user: "jane_doe", text: "Wow, so beautiful! 🌄" },
            { user: "traveller99", text: "Where is this?" },
          ],
          shares: 120,
        },
        {
          postId: "p2",
          imageUrl: "https://via.placeholder.com/500",
          caption: "Coffee time ☕ #MorningRoutine",
          likes: 1500,
          comments: [
            { user: "cafe_lover", text: "Looks delicious! ☕" },
            { user: "foodie", text: "I need this rn 😍" },
          ],
          shares: 80,
        },
      ],
      stories: [
        {
          storyId: "s1",
          imageUrl: "https://via.placeholder.com/400",
          likes: 2000,
          viewers: ["alice123", "mark99", "emma_watson"],
        },
        {
          storyId: "s2",
          imageUrl: "https://via.placeholder.com/400",
          likes: 1800,
          viewers: ["cafe_lover", "traveller99", "foodie"],
        },
      ],
    },
  
    {
      username: "lucky2007152",
      name: "Lucky 🤞🤞",
      bio: "",
      followers: 192 ,
      following: 48,
      profilePicture: "/images/lucky.jpg",
      reels: [
        {
          reelId: "r2",
          videoUrl: "https://example.com/reel2.mp4",
          likes: 4000,
          comments: [
            { user: "fitfan", text: "Great workout! 💪" },
            { user: "healthguru", text: "Motivational!" },
          ],
          shares: 250,
        },
      ],
      posts: [
        {
          postId: "p3",
          imageUrl: "https://via.placeholder.com/500",
          caption: "Morning Yoga Flow 🌿✨ #Wellness",
          likes: 2300,
          comments: [
            { user: "yogalover", text: "Love this pose! 🧘‍♀️" },
            { user: "mindfulness", text: "Beautiful vibes!" },
          ],
          shares: 100,
        },
      ],
      stories: [
        {
          storyId: "s3",
          imageUrl: "https://via.placeholder.com/400",
          likes: 1500,
          viewers: ["fitfan", "yogalover", "healthguru"],
        },
      ],
    },
  ];
  


  users.forEach((elem ,id)=>{
   let post = elem.reels.forEach((elem , id)=>{
    console.log(elem)
   })
  })