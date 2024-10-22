import { Metadata } from "next";
import { cv_data } from "../../components/cv_data";



export const metadata: Metadata = {
    title: `${cv_data.name} | ${cv_data.about}`,
    description: cv_data.summary,
  };

import CvPage from '@/components/CvPage';

export default function CV() {
    return <CvPage />;
}
