package com.meylot.rest.skillcost;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.fasterxml.jackson.databind.ObjectMapper;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

@RunWith(SpringJUnit4ClassRunner.class)
@WebMvcTest(SkillCostController.class)
public class SkillCostControllerTest {

    @Autowired
    private ObjectMapper objectMapper;
    @Autowired
    private MockMvc mockMvc;

    @Test
    public void firstTrainingCost() throws Exception {
        RequestBuilder requestBuilder = MockMvcRequestBuilders.get("/api/skill-cost?skill=MIECZE&from=0&to=1");
        // when
        MvcResult result = mockMvc.perform(requestBuilder)
                                  // then
                                  .andExpect(status().is2xxSuccessful())
                                  .andDo(print())
                                  .andReturn();
        assertThat(result.getResponse().getContentAsString(), is(equalTo("1")));
    }

    @Test
    public void lastCost() throws Exception {
        RequestBuilder requestBuilder = MockMvcRequestBuilders.get("/api/skill-cost?skill=SPEC_1&from=99&to=100");
        // when
        MvcResult result = mockMvc.perform(requestBuilder)
                                  // then
                                  .andExpect(status().is2xxSuccessful())
                                  .andDo(print())
                                  .andReturn();
        assertThat(result.getResponse().getContentAsString(), is(equalTo("29701")));
    }

    @Test
    public void sumOfRange() throws Exception {
        RequestBuilder requestBuilder = MockMvcRequestBuilders.get("/api/skill-cost?skill=SPEC_1&from=30&to=50");
        // when
        MvcResult result = mockMvc.perform(requestBuilder)
                                  // then
                                  .andExpect(status().is2xxSuccessful())
                                  .andDo(print())
                                  .andReturn();
        assertThat(result.getResponse().getContentAsString(), is(equalTo("98000")));
    }

}