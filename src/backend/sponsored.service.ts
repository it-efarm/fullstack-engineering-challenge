export type SponsoredItem = {
    title: string;
    url: string;
};

// Just act as if this is a database!
const _sponsoredItems: SponsoredItem[] =
    [
        {title: "RoboPlanters: Revolutionizing Agriculture with AI", url: "www.robo-planters.com"},
        {title: "Quantum Coffee: Taste the Future of Brewed Coffee", url: "www.quantumcoffee.tech"},
        {title: "Galactic Gadgets: Out-of-this-world Tech Products", url: "www.galacticgadgets.space"},
        {title: "Ninja Networks: Secure Your Connection with Stealth", url: "www.ninjanetworks.io"},
        {title: "Virtual Vacations: Explore the World from Home", url: "www.virtualvacations.vr"},
        {title: "EcoCharge: Green Charging Solutions for Techies", url: "www.ecocharge.green"},
        {title: "AI Artisans: Crafting Digital Masterpieces with Machine Learning", url: "www.aiartisans.art"},
        {title: "Spacey Storage: Infinite Cloud Storage from Outer Space", url: "www.spaceystorage.cloud"},
        {title: "Time Travel Tours: Book Your Next Adventure through Time", url: "www.timetraveltours.time"},
        {title: "Cryptic Cryptocurrency: Unlock Your Wealth's Potential", url: "www.cryptic-crypto.cash"}
    ]


export const SponsoredService = {
    getSponsoredItems(): Promise<SponsoredItem[]> {
        return Promise.resolve(_sponsoredItems)
    }
}
