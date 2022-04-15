import type { Ref } from 'vue';
import { defineStore } from 'pinia';
import type { User } from '@supabase/supabase-js';
import type { Profile } from './../types/profile';

export const useAuthStore = defineStore('auth', () => {
  const supabase = useSupabaseClient();

  const user: Ref<User | null> = useSupabaseUser();
  const profile: Ref<Profile | null> = ref(null);
  const isLoading: Ref<boolean> = ref(false);

  const getUserProfile = async () => {
    if (!!user.value) {
      try {
        isLoading.value = true;
        const { error, data } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.value.id)
          .single();

        if (error) throw error;
        profile.value = data;
        isLoading.value = false;
      }
      catch(error) {
        profile.value = null;
        console.error(error);
        isLoading.value = false;
        return error;
      }
    }
    else {
      profile.value = null;
    }
  }

  const signIn = async (email: string, password: string) => {
    try {
      const { error, user: newUser } = await supabase.auth.signIn({
        email,
        password
      });
      if (error) throw error;
      user.value = newUser;
    }
    catch(error) {
      console.error(error);
      return error;
    }
  }

  const signUp = async (email: string, password: string) => {
    try {
      const { error, user: newUser } = await supabase.auth.signUp({
        email,
        password
      });
      if (error) throw error;
      user.value = newUser;
    }
    catch(error) {
      console.error(error);
      return error;
    }
  }

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      user.value = null;
      profile.value = null;
    }
    catch(error) {
      console.error(error);
      return error;
    }
  }

  return { user, profile, isLoading, signIn, signUp, signOut, getUserProfile };
});