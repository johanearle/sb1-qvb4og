export interface IntentData {
  intent: string;
  phrases: string[];
  response: string;
}

export const intentData: IntentData[] = [
  // ... (previous intents remain unchanged)

  {
    intent: "Wish Lists",
    phrases: ["How do I create a wish list?", "Can I save products for later?", "Tell me about wish lists", "How to use the wish list feature"],
    response: "You can easily create a wish list by clicking the 'Add to Wish List' button on any product page. To view your wish list, click on the heart icon in the top navigation bar. You can manage multiple wish lists and share them with friends and family."
  },
  {
    intent: "Product Comparisons",
    phrases: ["How can I compare products?", "Is there a comparison tool?", "Compare features of different items", "Side-by-side product comparison"],
    response: "Our product comparison feature allows you to compare up to 4 products side by side. Simply click the 'Compare' checkbox on the products you're interested in, then click the 'Compare' button that appears at the bottom of the page. You'll see a detailed comparison of features, prices, and specifications."
  },
  {
    intent: "Stationery Hub Blog",
    phrases: ["Do you have a blog?", "Where can I find stationery tips?", "Tell me about your content", "Stationery organization advice"],
    response: "Yes, we have a Stationery Hub blog! It's filled with articles on stationery organization, productivity tips, and the latest trends in the stationery world. You can access it by clicking on the 'Blog' link in the main navigation menu. We update it regularly with new content to help you make the most of your stationery."
  },
  {
    intent: "Social Media Sharing",
    phrases: ["Can I share products on social media?", "How to share items with friends", "Social media integration", "Sharing options"],
    response: "Absolutely! You can easily share any product or blog post on your social media networks. Look for the share buttons on product pages and blog posts. You can share on platforms like Facebook, Twitter, Pinterest, and Instagram. It's a great way to get opinions from friends or share your favorite finds!"
  },
  {
    intent: "Offline Functionality",
    phrases: ["Can I use the app offline?", "Offline browsing options", "What features work without internet?", "Offline catalog viewing"],
    response: "Yes, we offer some offline functionality! You can browse our product catalog and view your order history even when you're not connected to the internet. The app will automatically sync any changes when you're back online. This feature is great for browsing on-the-go or in areas with limited connectivity."
  }
];