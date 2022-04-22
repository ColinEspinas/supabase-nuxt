import type { Ref } from 'vue';
import { defineStore } from 'pinia';
import type { User } from '@supabase/supabase-js';
import type { Profile } from './../types/profile';

export const useAuthStore = defineStore('auth', () => {
  const supabase = useSupabaseClient();

  const user: Ref<User | null> = useSupabaseUser();
  const profile: Ref<Profile | null> = ref(null);

  const getUserProfile = async () => {
    if (!!user.value) {
      try {
        const { error, data } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.value.id)
          .single();

        if (error) throw error;
        profile.value = data;
      }
      catch(error) {
        profile.value = null;
        console.error(error);
      }
    }
    else {
      profile.value = null;
    }
    return profile;
  }

  return { user, profile, getUserProfile };
});