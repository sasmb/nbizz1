/**
 * Utility functions for carousel components
 */

/**
 * Extract a meaningful title from a filename
 * Removes extension, replaces underscores/hyphens with spaces, capitalizes words
 */
export function extractTitleFromFilename(filename: string): string {
  // Remove file extension
  let title = filename.replace(/\.[^/.]+$/, '');
  
  // Replace underscores and hyphens with spaces
  title = title.replace(/[_-]/g, ' ');
  
  // Remove UUIDs and long hash-like strings
  title = title.replace(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/gi, '');
  title = title.replace(/[0-9a-f]{32,}/gi, '');
  
  // Clean up multiple spaces
  title = title.replace(/\s+/g, ' ').trim();
  
  // Capitalize first letter of each word
  title = title
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
  
  // If title is too short or empty, use a default
  if (title.length < 3) {
    return 'AI Generated Content';
  }
  
  return title;
}

/**
 * Extract prompt from filename if it contains descriptive text
 * For files like "social_drake6817_a_close-up_photograph..." 
 * Extract the descriptive part
 */
export function extractPromptFromFilename(filename: string): string {
  // Remove extension
  let prompt = filename.replace(/\.[^/.]+$/, '');
  
  // Try to extract meaningful parts (skip UUIDs, user IDs, etc.)
  // Look for patterns like "social_username_description" or "u123_description"
  const patterns = [
    /^(social_|u\d+_|amo\d+_|ludlow\._)/i, // Remove prefixes
    /_[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}_?\d*$/i, // Remove UUIDs at end
  ];
  
  patterns.forEach(pattern => {
    prompt = prompt.replace(pattern, '');
  });
  
  // Replace underscores with spaces
  prompt = prompt.replace(/_/g, ' ');
  
  // Clean up
  prompt = prompt.replace(/\s+/g, ' ').trim();
  
  // Capitalize
  if (prompt.length > 0) {
    prompt = prompt.charAt(0).toUpperCase() + prompt.slice(1);
  }
  
  return prompt || extractTitleFromFilename(filename);
}

/**
 * Check if a file is a video based on extension
 */
export function isVideoFile(filename: string): boolean {
  const videoExtensions = ['.mp4', '.mov', '.webm', '.ogg', '.avi'];
  return videoExtensions.some(ext => filename.toLowerCase().endsWith(ext));
}

/**
 * Check if a file is an image based on extension
 */
export function isImageFile(filename: string): boolean {
  const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg'];
  return imageExtensions.some(ext => filename.toLowerCase().endsWith(ext));
}


