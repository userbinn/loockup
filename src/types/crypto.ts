export interface CryptoCardProps {
  icon: React.ElementType;
  name: string;
  symbol: string;
  price: string;
  change: string;
}

export interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface SocialLinkProps {
  icon: React.ElementType;
  href: string;
}