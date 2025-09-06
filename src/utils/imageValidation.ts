// Image validation script for committee members
// This script helps identify and resolve image loading issues

import { 
  internationalScientificCommittee,
  hostCommittee, 
  internationalCommittee,
  teamLeaders 
} from '../../data/committeeMembers';

export interface ImageValidationResult {
  memberName: string;
  imageUrl: string;
  isValid: boolean;
  imageType: 'external' | 'local' | 'base64' | 'empty' | 'invalid';
  issues: string[];
}

export const validateAllImages = (): ImageValidationResult[] => {
  const allMembers = [
    ...internationalScientificCommittee,
    ...hostCommittee,
    ...internationalCommittee,
    ...teamLeaders
  ];

  return allMembers.map(member => validateMemberImage(member));
};

export const validateMemberImage = (member: { name: string; image: string }): ImageValidationResult => {
  const result: ImageValidationResult = {
    memberName: member.name,
    imageUrl: member.image,
    isValid: true,
    imageType: 'invalid',
    issues: []
  };

  // Check if image is empty
  if (!member.image || member.image.trim() === '') {
    result.isValid = false;
    result.imageType = 'empty';
    result.issues.push('No image URL provided');
    return result;
  }

  // Detect image type and validate
  if (member.image.startsWith('http://') || member.image.startsWith('https://')) {
    result.imageType = 'external';
    
    // Check for common issues with external URLs
    if (member.image.includes('linkedin.com') && member.image.includes('e=')) {
      result.issues.push('LinkedIn image URL may expire (contains expiration parameter)');
    }
    
    if (member.image.includes('encrypted-tbn0.gstatic.com')) {
      result.issues.push('Google Images cached URL - may not be reliable long-term');
    }

  } else if (member.image.startsWith('/')) {
    result.imageType = 'local';
    
    // List of known local images
    const knownLocalImages = ['/Bernard.jpg', '/qingyu.jpg', '/DrHoussein.jpg', '/logo.png'];
    if (!knownLocalImages.includes(member.image)) {
      result.issues.push('Local image path not found in public folder');
      result.isValid = false;
    }

  } else if (member.image.startsWith('data:image')) {
    result.imageType = 'base64';
    
    // Check if base64 data is complete
    if (member.image.includes('...') || member.image.includes('truncated')) {
      result.issues.push('Base64 image data appears to be truncated');
      result.isValid = false;
    }
    
    if (member.image.length < 100) {
      result.issues.push('Base64 image data seems too short to be valid');
      result.isValid = false;
    }

  } else {
    result.imageType = 'invalid';
    result.isValid = false;
    result.issues.push('Image URL format not recognized');
  }

  return result;
};

// Generate a report of all image issues
export const generateImageReport = (): string => {
  const results = validateAllImages();
  const issues = results.filter(r => !r.isValid || r.issues.length > 0);
  
  let report = '# Committee Member Image Validation Report\n\n';
  
  if (issues.length === 0) {
    report += '✅ All committee member images are valid!\n';
    return report;
  }

  report += `⚠️ Found ${issues.length} image issues:\n\n`;
  
  issues.forEach((issue, index) => {
    report += `## ${index + 1}. ${issue.memberName}\n`;
    report += `- **Image Type**: ${issue.imageType}\n`;
    report += `- **URL**: \`${issue.imageUrl || '(empty)'}\`\n`;
    report += `- **Status**: ${issue.isValid ? '✅ Valid (with warnings)' : '❌ Invalid'}\n`;
    
    if (issue.issues.length > 0) {
      report += '- **Issues**:\n';
      issue.issues.forEach(i => report += `  - ${i}\n`);
    }
    
    report += '\n';
  });

  // Add recommendations
  report += '## Recommendations\n\n';
  report += '1. **For empty images**: Add placeholder images or find appropriate profile photos\n';
  report += '2. **For expired LinkedIn URLs**: Replace with direct image files in the public folder\n';
  report += '3. **For truncated base64 images**: Restore the complete base64 data\n';
  report += '4. **For missing local files**: Ensure image files exist in the public folder\n';

  return report;
};

// Development helper - logs validation results to console
export const logImageValidation = (): void => {
  if (process.env.NODE_ENV === 'development') {
    const report = generateImageReport();
    console.log(report);
  }
};
