import { useAuthStore } from './../stores/auth';

export const useAuth = async () => {
  const auth = useAuthStore();
  const supabase = useSupabaseClient();

  await auth.getUserProfile();

  supabase.auth.onAuthStateChange(() => {
    auth.getUserProfile();
  });
}
