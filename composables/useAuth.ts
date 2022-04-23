export const useAuth = () => {
  const supabase = useSupabaseClient();
  const route = useRoute();
  const config = useRuntimeConfig();

  const signIn = async (email: string, password: string, to?: string) => {
    const { error } = await supabase.auth.signIn({
      email,
      password
    },
    {
      redirectTo: `${config.public.siteUrl}${to || route.query?.redirect}`
    });

    if (error) {
      return { error };
    }

    navigateTo({ name: 'login', query: { redirect: to || route.query?.redirect } });
  };

  const signUp = async (email: string, password: string, to?: string) => {
    const { error } = await supabase.auth.signUp({
      email,
      password
    },
    {
      redirectTo: `${config.public.siteUrl}${to || route.query?.redirect}`
    });

    if (error) {
      return { error };
    }

    navigateTo({ name: 'login', query: { redirect: to || route.query?.redirect } });
  };

  const signOut = async (to?: string) => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      return { error };
    }

    navigateTo({ name: to });
  };

  return {
    signUp,
    signIn,
    signOut
  };
};
