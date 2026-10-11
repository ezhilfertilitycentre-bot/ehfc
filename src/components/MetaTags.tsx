import React, { useEffect } from 'react';

interface MetaTagsProps {
  title: string;
  description: string;
  canonicalPath?: string;
}

export const MetaTags: React.FC<MetaTagsProps> = ({ title, description, canonicalPath = '' }) => {
  useEffect(() => {
    // Update Title
    document.title = `${title} | Ezhil Hospital & Fertility Centre, Dharmapuri`;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Update Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    const baseUrl = 'https://ezhilhospital.com'; // Production domain placeholder
    canonical.setAttribute('href', `${baseUrl}${canonicalPath}`);
  }, [title, description, canonicalPath]);

  return null;
};
