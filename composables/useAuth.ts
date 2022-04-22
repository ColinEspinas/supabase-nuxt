import { useAuthStore } from './../stores/auth';

export const useAuth = () => {
  const auth = useAuthStore();
  const supabase = useSupabaseClient();
  const route = useRoute();

  supabase.auth.onAuthStateChange(() => {
    auth.getUserProfile();
  });

  const signIn = async (email: string, password: string, to?: string) => {
    try {
      const { error } = await supabase.auth.signIn({
        email,
        password
      },
      {
        redirectTo: `http://localhost:3000${ to || route.query?.redirect }`
      });
      if (error) throw error;
    }
    catch(error) {
      console.error(error);
      return error;
    }

    navigateTo({ name: 'login', query: { redirect: to || route.query?.redirect } });
  }

  const signUp = async (email: string, password: string, to?: string) => {
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password
      },
      {
        redirectTo: `http://localhost:3000${ to || route.query?.redirect }`
      });
      if (error) throw error;
    }
    catch(error) {
      console.error(error);
      return error;
    }

    navigateTo({ name: 'login', query: { redirect: to || route.query?.redirect } });
  }

  const signOut = async (to?: string) => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    }
    catch(error) {
      console.error(error);
      return error;
    }

    navigateTo({ name: to });
  }

  return {
    signUp,
    signIn,
    signOut,
  }
}
