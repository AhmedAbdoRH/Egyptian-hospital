export interface TeamMember {
  id: string;
  isDoctor: boolean;
  name: string;
  role: string;
  title: string;
  education?: string;
  qualifications: string[];
  careerHighlights: string[];
  image?: string;
  fullBio: string;
}

export type ServiceDepartmentId =
  | 'orthopedics'
  | 'physiotherapy'
  | 'obgyn'
  | 'general-surgery'
  | 'medicine-herbal'
  | 'diagnostics-support';

export interface MedicalService {
  id: string;
  title: string;
  departmentId: ServiceDepartmentId;
  departmentLabel: string;
  category: 'clinical' | 'surgical' | 'diagnostic' | 'regenerative' | 'support';
  description: string;
  iconName: string;
  details?: string[];
  featured?: boolean;
}

export interface OrthobiologicProcedure {
  title: string;
  abbr: string;
  description: string;
  indications: string[];
  benefits: string[];
}

export interface MedicalTourismFeature {
  title: string;
  description: string;
  iconName: string;
}

export interface HospitalFacilityItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface AccreditationOrg {
  name: string;
  type: 'accreditation' | 'enrolled';
  description: string;
}

export interface WhatsAppBookingPayload {
  patientName: string;
  patientPhone: string;
  specialty: string;
  doctorPreference: string;
  preferredDate: string;
  preferredTime: string;
  complaint: string;
  visitType: 'consultation' | 'surgery' | 'rehabilitation' | 'medical-tourism';
}
