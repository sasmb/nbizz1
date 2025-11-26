'use client';

import { FramerCarousel, CarouselItem } from './framer-carousel';
import { extractTitleFromFilename } from './carousel-utils';

// List of AI video files from public/aivideos/
const aiVideoFiles = [
  'amo4u_A_front-facing_shot_of_an_oversized_color_blocked_pink__8f3738b1-cc95-4be7-8b56-dbec254b236c_0.mp4',
  'ludlow._a_close-up_of_the_face_mask_and_sunglasses_worn_by_an_a6fc87a9-b066-4ce3-b2c8-b8ca12724cbb_0.mp4',
  'social_drake6817_a_close-up_photograph_in_the_style_of_david_lachape_7100893c-ae80-415f-be5b-345d92bcb2df_0.mp4',
  'social_jmlaurent7_91217_A_woman_wearing_a_white_Lacoste_dress_with_t_6064b300-3e8c-4855-ab81-9e34d8a0e4de_0 (1).mp4',
  'social_u2771562263_ultra_realistic_still_life_of_a_fine_diamond_arm__e6c0def0-3a35-44c9-b3c7-009c9dd7e5a0_0.mp4',
  'social_u3527479112_Close-up_cinematic_shot_of_a_gentle_soft-textured_dce64286-9169-42bf-b52d-ceb6b05e9572_0.mp4',
  'social_u5981457698_photorealistic_ultra-detailed_beauty_skincare_pho_cebf0e3e-ddcf-41b2-b01b-afcaee01961d_0.mp4',
  'social_u8499655843_full_body_photo_of_a_female_model_on_the_cover_of_6653f774-fdf3-4465-bfd2-da7edb321919_0.mp4',
  'u4377289141_21h_An_ethereal_and_luminous_close-up_studio_shot_85189148-4cea-425f-839a-98e7584076d4_0.mp4',
  'u6441295749_A_fashion_editorial_photograph_with_a_minimalist__d9262c72-04a7-4f12-8621-6f4d54b12090_0.mp4',
  'u6931235479_perfume_bottle_labeled_DOSCOPE_surges_upward_thro_06cfa2c3-524c-4870-a928-c6df0f2c1d8a_1.mp4',
  'u8996678373_a_close_up_a_athletic_man_of_German-Swiss_descent_39378067-bcdb-47e7-a0a3-bd138e562048_0.mp4',
  'u9429493849_surreal_high_fashion_scene_large_room_with_very_h_0272fc13-6f3d-45f0-b6f9-c02954f3b454_0.mp4',
  'Vola Vola Energy Boost.mp4',
  'Vola Vola Enerji.mp4',
  'WhatsApp Ordering Made Easy.mp4',
  'WhatsApp Video 2025-09-23 at 01.27.00.mp4',
];

const videoItems: CarouselItem[] = aiVideoFiles.map((filename, index) => ({
  id: index + 1,
  url: `/aivideos/${filename}`,
  title: extractTitleFromFilename(filename),
  type: 'video' as const,
}));

export function AIVideosCarousel() {
  return (
    <div className="w-full">
      <FramerCarousel items={videoItems} height="h-[600px]" />
    </div>
  );
}


