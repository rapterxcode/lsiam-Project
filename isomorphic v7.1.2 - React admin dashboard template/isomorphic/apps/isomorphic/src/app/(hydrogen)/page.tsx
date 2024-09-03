import FileDashboard from '@/app/shared/file/dashboard';
import WelcomeDashboard from '@/app/shared/lswelcome';
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject(),
};

export default function WelcomeDashboardPage() {
  return <WelcomeDashboard />;
}
