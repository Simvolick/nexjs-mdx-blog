// SEO Monitoring Utility
// This file contains utilities to monitor and validate SEO health

export interface SEOIssue {
  type: 'error' | 'warning' | 'notice';
  category: string;
  message: string;
  url?: string;
  fix?: string;
}

export class SEOMonitor {
  private issues: SEOIssue[] = [];

  // Check for common SEO issues
  validatePage(url: string, metadata: any): SEOIssue[] {
    const pageIssues: SEOIssue[] = [];

    // Check meta description length
    if (metadata.description) {
      if (metadata.description.length < 120) {
        pageIssues.push({
          type: 'warning',
          category: 'Meta Description',
          message: `Meta description too short (${metadata.description.length} chars). Recommended: 120-160 characters.`,
          url,
          fix: 'Expand the meta description to provide more context and improve click-through rates.'
        });
      } else if (metadata.description.length > 160) {
        pageIssues.push({
          type: 'warning',
          category: 'Meta Description',
          message: `Meta description too long (${metadata.description.length} chars). May be truncated in search results.`,
          url,
          fix: 'Shorten the meta description to 120-160 characters.'
        });
      }
    } else {
      pageIssues.push({
        type: 'error',
        category: 'Meta Description',
        message: 'Missing meta description.',
        url,
        fix: 'Add a compelling meta description to improve search visibility.'
      });
    }

    // Check title length
    if (metadata.title) {
      if (metadata.title.length > 60) {
        pageIssues.push({
          type: 'warning',
          category: 'Title Tag',
          message: `Title too long (${metadata.title.length} chars). May be truncated in search results.`,
          url,
          fix: 'Shorten the title to under 60 characters while keeping it descriptive.'
        });
      }
    } else {
      pageIssues.push({
        type: 'error',
        category: 'Title Tag',
        message: 'Missing title tag.',
        url,
        fix: 'Add a descriptive title tag for the page.'
      });
    }

    // Check canonical URL
    if (!metadata.alternates?.canonical) {
      pageIssues.push({
        type: 'warning',
        category: 'Canonical URL',
        message: 'Missing canonical URL.',
        url,
        fix: 'Add a canonical URL to prevent duplicate content issues.'
      });
    }

    // Check Open Graph data
    if (!metadata.openGraph) {
      pageIssues.push({
        type: 'notice',
        category: 'Open Graph',
        message: 'Missing Open Graph metadata.',
        url,
        fix: 'Add Open Graph tags to improve social media sharing.'
      });
    }

    return pageIssues;
  }

  // Generate SEO report
  generateReport(): {
    summary: { errors: number; warnings: number; notices: number };
    issues: SEOIssue[];
    recommendations: string[];
  } {
    const errors = this.issues.filter(issue => issue.type === 'error').length;
    const warnings = this.issues.filter(issue => issue.type === 'warning').length;
    const notices = this.issues.filter(issue => issue.type === 'notice').length;

    const recommendations = [
      'Ensure all pages have unique, descriptive meta descriptions between 120-160 characters',
      'Implement proper canonical URLs for all pages to prevent duplicate content',
      'Add structured data (JSON-LD) to improve search engine understanding',
      'Optimize images with proper alt text and modern formats (WebP, AVIF)',
      'Implement proper internal linking structure',
      'Monitor Core Web Vitals and page loading performance',
      'Ensure mobile-first responsive design',
      'Create and maintain an XML sitemap',
      'Implement proper robots.txt configuration',
      'Monitor for broken links and 404 errors regularly'
    ];

    return {
      summary: { errors, warnings, notices },
      issues: this.issues,
      recommendations
    };
  }

  // Add issue to monitoring
  addIssue(issue: SEOIssue): void {
    this.issues.push(issue);
  }

  // Clear all issues
  clearIssues(): void {
    this.issues = [];
  }
}

// Export singleton instance
export const seoMonitor = new SEOMonitor(); 