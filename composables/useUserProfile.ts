import type { Ref } from 'vue';
import type { Profile } from './../types/profile';

export const useUserProfile = (): Ref<Profile> => {
  const supabase = useSupabaseClient();
  const user = useSupabaseUser();

  const { data: profile }: { data: Ref<Profile> } = useAsyncData('profile', async () => {
    const { data } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.value.id)
      .single();
    return data;
  });

  return profile;
};
