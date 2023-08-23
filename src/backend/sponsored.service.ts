export type SponsoredItem = {
    title: string;
    link: string;
};

// Just act as if this is a database!
const _sponsoredItems: SponsoredItem[] =
    [
        {title: "RoboPlanters: Revolutionizing Agriculture with AI", link: "www.robo-planters.com"},
        {title: "Quantum Coffee: Taste the Future of Brewed Coffee", link: "www.quantumcoffee.tech"},
        {title: "Galactic Gadgets: Out-of-this-world Tech Products", link: "www.galacticgadgets.space"},
        {title: "Ninja Networks: Secure Your Connection with Stealth", link: "www.ninjanetworks.io"},
        {title: "Virtual Vacations: Explore the World from Home", link: "www.virtualvacations.vr"},
        {title: "EcoCharge: Green Charging Solutions for Techies", link: "www.ecocharge.green"},
        {title: "AI Artisans: Crafting Digital Masterpieces with Machine Learning", link: "www.aiartisans.art"},
        {title: "Spacey Storage: Infinite Cloud Storage from Outer Space", link: "www.spaceystorage.cloud"},
        {title: "Time Travel Tours: Book Your Next Adventure through Time", link: "www.timetraveltours.time"},
        {title: "Cryptic Cryptocurrency: Unlock Your Wealth's Potential", link: "www.cryptic-crypto.cash"}
    ]


export const SponsoredService = {
    async getSponsoredItems(): Promise<SponsoredItem[]> {
        return Promise.resolve(_sponsoredItems)
    }
}
