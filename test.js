const jsonData = [
  {
    offering_id: "379ee7c2-874a-4cb4-a332-720fdc0cc956",
    special_offer: "<p>T&amp;C Apply</p>",
    details: "juice details",
    short_offer: "123 MRP",
    actual_mrp: "123",
    payable_amount: 0,
    logo: "images/offerings/logos/brand_logo-1689684247743.brand_logo-1687322189713.Sony (2).png",
    icon: "images/offerings/icons/brand_icon-1681456390105.Pharmeasy_Logo_300x200.jpg",
    discount: 123,
    redemption_process: "<ul><li>rdp 3<br></li><li>rdp6</li></ul>",
    tnc: "<ul><li>tnc 34<br></li><li>tnc 4</li></ul>",
    brand_name: "Juice Lounge",
    priority: "-1",
    coin: "12",
    tags: ["Dining", "Entertainment"],
  },
  {
    offering_id: "7c3d2d71-5341-416b-8ba2-c76fe7b4c25e",
    special_offer: "<p><del>20</del><br></p>",
    details: "Flat 20% Off",
    short_offer: "INR 100",
    actual_mrp: "100",
    payable_amount: 2,
    logo: "images/offerings/logos/brand_logo-1689683920926.brand_logo-1686547133115.MYNTRA.png",
    icon: "images/offerings/icons/brand_icon-1684252516195.brand_icon-1684223789948.Frame_38_50.jpg",
    discount: 98,
    redemption_process:
      '<ul><li>21 Days access to cultpass LIVE - digital fitness subscriptions<br></li><li>To redeem go to&nbsp;<a target="_blank" href="https://www.cult.fit/me/vouchers" alt="https://www.cult.fit/me/vouchers">https://www.cult.fit/me/vouchers</a>&nbsp;and login or signup</li><li>You can also use the cult. fit app, go to the "Home" section on the cult. fit app (For ios users the code can only be redeemed via the website / mobile web).</li><li>Click on the profile icon on the top left, visit the "Redeem Voucher" section within "Referrals Vouchers"</li><li>Enter the voucher code, verify, and redeem it to start your unlimited access.</li><li>Your access will start from the date of activation of the voucher code.</li><li>Once redeemed, you can book classes from both cult.fit app and website (for both ios and Android).</li></ul>',
    tnc: '<ul><li>Each voucher can be redeemed only once per user.<br></li><li>The access is applicable to the section under "LIVE" on the cult.fit app/web</li><li>The voucher is applicable in India only.</li><li>The dates of the membership can be viewed in the profile section under "Active Packs / Subscriptions".</li><li>This pass does not allow customers to pause their membership.</li><li>Only one voucher can be used at a time and cannot be combined with other offers.</li><li>The voucher is not transferable and should not be resold or redeemed for cash.</li><li>If the product purchased using a promotional voucher is returned, the refund value will not include the value of the voucher code.</li><li>Cult. fit reserves the right to modify or revoke the voucher/offer at any point in time.</li></ul>',
    brand_name: "Cultfit",
    priority: "-1",
    coin: "0",
    tags: ["Health & Wellness"],
  },
];

let arr = jsonData
  .filter((obj) => obj.priority != "-1" && obj.priority)
  .sort((a, b) => parseInt(a.priority) - parseInt(b.priority));
let arr2 = jsonData.filter((obj) => obj.priority == "-1" || !obj.priority);
console.log(arr2);
